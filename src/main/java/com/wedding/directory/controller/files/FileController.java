package com.wedding.directory.controller.files;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.payload.UploadFileResponse;
import com.wedding.directory.service.AdvertisementService;
import com.wedding.directory.service.FileStorageService;
import com.wedding.directory.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class FileController {
    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    private UserService userService;
    @Autowired
    private AdvertisementService advertisementService;

    @PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("user") String user) {
        String fileName = fileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();

        User vendor = userService.findUserModalByEmail(user);
        vendor.setImage(fileDownloadUri);
        userService.saveUser(vendor);
        return new UploadFileResponse(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());
    }

    @PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, @RequestParam("user") String vendor) throws InterruptedException {
        List<UploadFileResponse> list = new ArrayList<>();
        UploadFileResponse response = null;
        System.err.println(vendor);
        User user = userService.findUserModalByEmail(vendor);
        ADProfile adProfile = advertisementService.getByVendor(user);
        int count = 1;
        for (MultipartFile file : files) {
            String fileName = fileStorageService.storeAdFiles(file);
            Thread.sleep(1000);
            String uriString = ServletUriComponentsBuilder.fromCurrentContextPath().path("/ad/downloadFile/").path(fileName).toUriString();
            response = new UploadFileResponse(fileName, uriString, file.getContentType(), file.getSize());
            list.add(response);
            setAdImagesUrls(adProfile, uriString, count);
            count++;
        }
        advertisementService.updateAdImages(adProfile);
        return list;
    }

    private ADProfile setAdImagesUrls(ADProfile adProfile, String uriString, int count) {
        System.out.println(uriString);
        if (count == 1) {
            adProfile.setCoverImage1(uriString);
        } else if (count == 2) {
            adProfile.setCoverImage2(uriString);
        } else if (count == 3) {
            adProfile.setCoverImage3(uriString);
        } else if (count == 4) {
            adProfile.setCoverImage4(uriString);
        } else if (count == 5) {
            adProfile.getPackages().setPackageImage1(uriString);
        } else if (count == 6) {
            adProfile.getPackages().setPackageImage2(uriString);
        } else if (count == 7) {
            adProfile.getPackages().setPackageImage3(uriString);
        } else if (count == 8) {
            adProfile.getPackages().setPackageImage4(uriString);
        } else if (count == 9) {
            adProfile.getPackages().setPackageImage5(uriString);
        } else if (count == 10) {
            adProfile.getPackages().setPackageImage6(uriString);
        }
        return adProfile;
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        Resource resource = fileStorageService.loadFileAsResource(fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            logger.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @GetMapping("/ad/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadAdFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        Resource resource = fileStorageService.loadAdFileAsResource(fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            logger.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}
