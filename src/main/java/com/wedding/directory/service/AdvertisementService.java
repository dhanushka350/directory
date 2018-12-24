package com.wedding.directory.service;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.modal.advertisement.Packages;
import com.wedding.directory.payload.*;
import com.wedding.directory.payload.Package;
import com.wedding.directory.repository.AdvertisementRepository;
import com.wedding.directory.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class AdvertisementService {

    @Autowired
    private AdvertisementRepository repository;

    @Autowired
    private UserService userService;
    @Autowired
    private PackageRepository packageRepository;

    public String addListing(ADResponse adResponse) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        User user = userService.findUserModalByEmail(adResponse.getVendor());
        ADProfile response = repository.findTopByVendor(user);
        if (response == null) {
            response = new ADProfile();
            response.setPackages(packageRepository.save(new Packages()));
        }
        response.setCategory(adResponse.getCategory());
        response.setCity(adResponse.getCity());
        response.setOpeningDates(adResponse.getOpeningDates());
        response.setOpeningTime(adResponse.getOpeningTime());
        response.setClosingTime(adResponse.getClosingTime());
        response.setDescription(adResponse.getDescription());
        response.setExperience(adResponse.getExperience());
        response.setFacebook(adResponse.getFacebook());
        response.setMap(adResponse.getMap());
        response.setView(adResponse.getView());
        response.setProfessionals(adResponse.getProfessionals());
        response.setType(adResponse.getType());
        response.setTwitter(adResponse.getTwitter());
        response.setTitle(adResponse.getTitle());
        response.setVendor(user);
        response.setCreatedDate(getDate());
        response.setExpiredDate(getExpireDate(response.getCreatedDate()));
        ADProfile save = repository.save(response);
        if (save != null) {
            return "SUCCESS";
        } else {
            return "FAILED";
        }
    }

    private String getDate() {
        Calendar now = Calendar.getInstance();
        return "" + (now.get(Calendar.MONTH) + 1)
                + "-"
                + now.get(Calendar.DATE)
                + "-"
                + now.get(Calendar.YEAR);
    }

    private String getExpireDate(String cdate) {

        int year = Integer.parseInt(cdate.split("-")[2]);
        int month = Integer.parseInt(cdate.split("-")[1]);
        int day = Integer.parseInt(cdate.split("-")[0]);
        year++;
        return day + "-" + month + "-" + year;
    }

    public String updateAdImages(ADProfile profile) {
        ADProfile save = repository.save(profile);
        if (save != null) {
            return "SUCCESS";
        } else {
            return "FAILED";
        }
    }

    public ADProfile getByVendor(User user) {
        return repository.findTopByVendor(user);
    }

    public List<ADResponse> getAll() {
        return setAdResponse(repository.findAll());
    }

    public List<ADResponse> getTopRatedAdvertiesments() {
        return setAdResponse(repository.getLmitedData());
    }

    public List<String> getAllCity() {
        return repository.getDistinctByCity();
    }

    public List<String> getAllVenoCat() {
        return repository.getAllVenoCat();
    }

    /**
     * need to pass ADProfile list to this method and this method will retun  ADResponse list
     * ADProfile list ekk pass karhama me method eken adresponse list ekk hadala retun karanwa
     * code duplicate wena eka nawathhtna meka haduwe
     *
     * @param List<AddProfile>
     * @return List<ADResponse>
     */
    List<ADResponse> setAdResponse(List<ADProfile> all) {
        List<ADResponse> adResponses = new ArrayList<>();
        ADResponse adResponse;
        for (ADProfile adProfile : all) {
            adResponse = new ADResponse();
            adResponse.setId(adProfile.getId());
            adResponse.setVendor(adProfile.getVendor().getEmail());
            adResponse.setTitle(adProfile.getTitle());
            adResponse.setType(adProfile.getType());
            adResponse.setCity(adProfile.getCity());
            adResponse.setCategory(adProfile.getCategory());
            adResponse.setOpeningTime(adProfile.getOpeningTime());
            adResponse.setOpeningDates(adProfile.getOpeningDates());
            adResponse.setClosingTime(adProfile.getClosingTime());
            adResponse.setDescription(adProfile.getDescription());
            adResponse.setFacebook(adProfile.getFacebook());
            adResponse.setTwitter(adProfile.getTwitter());
            adResponse.setExperience(adProfile.getExperience());
            adResponse.setProfessionals(adProfile.getProfessionals());
            adResponse.setMap(adProfile.getMap());
            adResponse.setView(adProfile.getView());

            adResponse.setCoverImage1(adProfile.getCoverImage1());
            adResponse.setCoverImage2(adProfile.getCoverImage2());
            adResponse.setCoverImage3(adProfile.getCoverImage3());
            adResponse.setCoverImage4(adProfile.getCoverImage4());
            adResponse.setCreatedDate(adProfile.getCreatedDate());


//            adResponse.setPackageImage1(adProfile.getPackages().getPackageImage1());
//            adResponse.setPackageImage2(adProfile.getPackages().getPackageImage2());
//            adResponse.setPackageImage3(adProfile.getPackages().getPackageImage3());
//            adResponse.setPackageImage4(adProfile.getPackages().getPackageImage4());
//
//            adResponse.setPackageName1(adProfile.getPackages().getPackageName1());
//            adResponse.setPackageName2(adProfile.getPackages().getPackageName2());
//            adResponse.setPackageName3(adProfile.getPackages().getPackageName3());
//            adResponse.setPackageName4(adProfile.getPackages().getPackageName4());
//            adResponse.setPackageName5(adProfile.getPackages().getPackageName5());
//            adResponse.setPackageName6(adProfile.getPackages().getPackageName6());
            adResponses.add(adResponse);
        }
        return adResponses;
    }

    public List<ADResponse> getTopRatedAdvertiesments(String city, String vend) {
        if (vend.equals("Select Vendor Category") && city.equals("Select City")) {
            return setAdResponse(repository.findAll());
        } else if (vend.equals("Select Vendor Category")) {
            return setAdResponse(repository.getLmitedDataBycity(city));
        } else if (city.equals("Select City")) {
            return setAdResponse(repository.getLmitedDataByVend(vend));
        } else {
            return setAdResponse(repository.getLmitedData(vend, city));
        }
    }

    public ADResponse getOneAdvertiesment(String addID) {

        ADProfile adProfile = repository.getOne(Integer.parseInt(addID));
        ADResponse adResponse = new ADResponse();
        if (adProfile != null) {
            adResponse.setId(adProfile.getId());
            adResponse.setVendor(adProfile.getVendor().getEmail());
            adResponse.setTitle(adProfile.getTitle());
            adResponse.setType(adProfile.getType());
            adResponse.setCity(adProfile.getCity());
            adResponse.setCategory(adProfile.getCategory());
            adResponse.setOpeningTime(adProfile.getOpeningTime());
            adResponse.setOpeningDates(adProfile.getOpeningDates());
            adResponse.setClosingTime(adProfile.getClosingTime());
            adResponse.setDescription(adProfile.getDescription());
            adResponse.setFacebook(adProfile.getFacebook());
            adResponse.setTwitter(adProfile.getTwitter());
            adResponse.setExperience(adProfile.getExperience());
            adResponse.setProfessionals(adProfile.getProfessionals());
            adResponse.setMap(adProfile.getMap());
            adResponse.setView(adProfile.getView());
            adResponse.setCoverImage1(adProfile.getCoverImage1());
            adResponse.setCoverImage2(adProfile.getCoverImage2());
            adResponse.setCoverImage3(adProfile.getCoverImage3());
            adResponse.setCoverImage4(adProfile.getCoverImage4());
            adResponse.setCreatedDate(adProfile.getCreatedDate());

//            adResponse.setPackageImage1(adProfile.getPackages().getPackageImage1());
//            adResponse.setPackageImage2(adProfile.getPackages().getPackageImage2());
//            adResponse.setPackageImage3(adProfile.getPackages().getPackageImage3());
//            adResponse.setPackageImage4(adProfile.getPackages().getPackageImage4());
//            adResponse.setPackageImage5(adProfile.getPackages().getPackageImage5());
//            adResponse.setPackageImage6(adProfile.getPackages().getPackageImage6());
//
//            adResponse.setPackageName1(adProfile.getPackages().getPackageName1());
//            adResponse.setPackageName2(adProfile.getPackages().getPackageName2());
//            adResponse.setPackageName3(adProfile.getPackages().getPackageName3());
//            adResponse.setPackageName4(adProfile.getPackages().getPackageName4());
//            adResponse.setPackageName5(adProfile.getPackages().getPackageName5());
//            adResponse.setPackageName6(adProfile.getPackages().getPackageName6());

            Venodr venodr = new Venodr();
            venodr.setId(adProfile.getVendor().getId());
            venodr.setEmail(adProfile.getVendor().getEmail());
            venodr.setName(adProfile.getVendor().getName());
            venodr.setLastName(adProfile.getVendor().getLastName());
            venodr.setPhone(adProfile.getVendor().getPhone());
            venodr.setDob(adProfile.getVendor().getDob());
            venodr.setAddress(adProfile.getVendor().getAddress());
            venodr.setActive(adProfile.getVendor().getActive());
            venodr.setImage(adProfile.getVendor().getImage());
            adResponse.setVenodr(venodr);
        }
        return adResponse;
    }

    public List<AllAdvertisements> getAllAdsByVendor(String vendor) {
        List<AllAdvertisements> list = new ArrayList<>();
        AllAdvertisements advertisement = null;
        User user = userService.findUserModalByEmail(vendor);
        for (ADProfile allByVendorEqual : repository.findAllByVendorEquals(user)) {
            advertisement = new AllAdvertisements();
            advertisement.setId(allByVendorEqual.getId());
            advertisement.setAd_status("online");
            advertisement.setCreated_date(allByVendorEqual.getCreatedDate());
            advertisement.setExpire_date(allByVendorEqual.getExpiredDate());
            advertisement.setPayment_status("free");
            advertisement.setTitle(allByVendorEqual.getTitle());
            advertisement.setType(allByVendorEqual.getType());
            list.add(advertisement);
        }
        return list;
    }

    public List<ADResponse> getAllAdvertiesmentsByCityAndCat(String city, String vend) {
        if (vend.equals("Select Vendor Category") && city.equals("Select City")) {
            System.out.println("===========================");
            System.out.println(1);
            System.out.println("===========================");
            return setAdResponse(repository.findAll());
        } else if (vend.equals("Select Vendor Category")) {
            System.out.println("===========================");
            System.out.println(2);
            System.out.println("===========================");
            return setAdResponse(repository.getDataBycity(city));
        } else if (city.equals("Select City")) {
            System.out.println("===========================");
            System.out.println(3);
            System.out.println(vend);
            System.out.println("===========================");
            return setAdResponse(repository.getDataByVend(vend));
        } else {
            System.out.println("===========================");
            System.out.println(4);
            System.out.println("===========================");
            return setAdResponse(repository.getData(vend, city));
        }
    }

    public Payload setPackages(Package aPackage) {
        Payload payload = new Payload();
        ADProfile byId = repository.getById(aPackage.getAdID());
        if (byId == null) {
            payload.setStatus(false);
            payload.setMessage("can not found advertisement.");
            return payload;
        }
        Packages packages = byId.getPackages();
        if (packages == null) {
            packages = new Packages();
        }
        packages.setPackageDes1(aPackage.getPackageDes1());
        packages.setPackageDes2(aPackage.getPackageDes2());
        packages.setPackageDes3(aPackage.getPackageDes3());
        packages.setPackageDes4(aPackage.getPackageDes4());
        packages.setPackageDes5(aPackage.getPackageDes5());
        packages.setPackageDes6(aPackage.getPackageDes6());

        packages.setPackageImage1(aPackage.getPackageImage1());
        packages.setPackageImage2(aPackage.getPackageImage2());
        packages.setPackageImage3(aPackage.getPackageImage3());
        packages.setPackageImage4(aPackage.getPackageImage4());
        packages.setPackageImage5(aPackage.getPackageImage5());
        packages.setPackageImage6(aPackage.getPackageImage6());

        packages.setPackageName1(aPackage.getPackageName1());
        packages.setPackageName2(aPackage.getPackageName2());
        packages.setPackageName3(aPackage.getPackageName3());
        packages.setPackageName4(aPackage.getPackageName4());
        packages.setPackageName5(aPackage.getPackageName5());
        packages.setPackageName6(aPackage.getPackageName6());

        packages.setPackagePrice1(aPackage.getPackagePrice1());
        packages.setPackagePrice2(aPackage.getPackagePrice2());
        packages.setPackagePrice3(aPackage.getPackagePrice3());
        packages.setPackagePrice4(aPackage.getPackagePrice4());
        packages.setPackagePrice5(aPackage.getPackagePrice5());
        packages.setPackagePrice6(aPackage.getPackagePrice6());

        Packages save = packageRepository.save(packages);
        if (save != null) {
            payload.setStatus(true);
            payload.setMessage("Successful.");
            byId.setPackages(packages);
            repository.saveAndFlush(byId);
        } else {
            payload.setMessage("Failed..");
            payload.setStatus(false);
        }
        return payload;
    }

    public Package getPackageDetailsByAd(int ad) {
        Package aPackage = new Package();
        ADProfile id = repository.getById(ad);

        if (id == null) {
            return null;
        }
        aPackage.setAdID(id.getId());
        aPackage.setPackageDes1(id.getPackages().getPackageDes1());
        aPackage.setPackageDes2(id.getPackages().getPackageDes2());
        aPackage.setPackageDes3(id.getPackages().getPackageDes3());
        aPackage.setPackageDes4(id.getPackages().getPackageDes4());
        aPackage.setPackageDes5(id.getPackages().getPackageDes5());
        aPackage.setPackageDes6(id.getPackages().getPackageDes6());

        aPackage.setPackageImage1(id.getPackages().getPackageImage1());
        aPackage.setPackageImage2(id.getPackages().getPackageImage2());
        aPackage.setPackageImage3(id.getPackages().getPackageImage3());
        aPackage.setPackageImage4(id.getPackages().getPackageImage4());
        aPackage.setPackageImage5(id.getPackages().getPackageImage5());
        aPackage.setPackageImage6(id.getPackages().getPackageImage6());

        aPackage.setPackageName1(id.getPackages().getPackageName1());
        aPackage.setPackageName2(id.getPackages().getPackageName2());
        aPackage.setPackageName3(id.getPackages().getPackageName3());
        aPackage.setPackageName4(id.getPackages().getPackageName4());
        aPackage.setPackageName5(id.getPackages().getPackageName5());
        aPackage.setPackageName6(id.getPackages().getPackageName6());

        aPackage.setPackagePrice1(id.getPackages().getPackagePrice1());
        aPackage.setPackagePrice2(id.getPackages().getPackagePrice2());
        aPackage.setPackagePrice3(id.getPackages().getPackagePrice3());
        aPackage.setPackagePrice4(id.getPackages().getPackagePrice4());
        aPackage.setPackagePrice5(id.getPackages().getPackagePrice5());
        aPackage.setPackagePrice6(id.getPackages().getPackagePrice6());

        return aPackage;
    }
}
