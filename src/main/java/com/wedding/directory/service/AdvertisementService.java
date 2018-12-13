package com.wedding.directory.service;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.payload.ADResponse;
import com.wedding.directory.repository.AdvertisementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdvertisementService {

    @Autowired
    private AdvertisementRepository repository;

    @Autowired
    private UserService userService;

    public String addListing(ADResponse adResponse) {

        User user = userService.findUserModalByEmail(adResponse.getVendor());
        ADProfile response = repository.findTopByVendor(user);
        if (response == null) {
            response = new ADProfile();
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
        response.setPackageName1(adResponse.getPackageName1());
        response.setPackageName2(adResponse.getPackageName2());
        response.setPackageName3(adResponse.getPackageName3());
        response.setPackageName4(adResponse.getPackageName4());
        response.setPackageName5(adResponse.getPackageName5());
        response.setPackageName6(adResponse.getPackageName6());
        response.setVendor(user);
        ADProfile save = repository.save(response);
        if (save != null) {
            return "SUCCESS";
        } else {
            return "FAILED";
        }
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

            adResponse.setPackageImage1(adProfile.getPackageImage1());
            adResponse.setPackageImage2(adProfile.getPackageImage2());
            adResponse.setPackageImage3(adProfile.getPackageImage3());
            adResponse.setPackageImage4(adProfile.getPackageImage4());

            adResponse.setPackageName1(adProfile.getPackageName1());
            adResponse.setPackageName2(adProfile.getPackageName2());
            adResponse.setPackageName3(adProfile.getPackageName3());
            adResponse.setPackageName4(adProfile.getPackageName4());
            adResponse.setPackageName5(adProfile.getPackageName5());
            adResponse.setPackageName6(adProfile.getPackageName6());
            adResponses.add(adResponse);
        }
        return adResponses;
    }

    public List<ADResponse> getTopRatedAdvertiesments(String city, String vend) {
        if (vend.equals("Select Vendor Category")) {
            System.out.println("======================================================");
            System.out.println("city");
            System.out.println("======================================================");
            return setAdResponse(repository.getLmitedDataBycity(city));
        } else if (city.equals("Select City")) {
            System.out.println("======================================================");
            System.out.println("vend");
            System.out.println("======================================================");
            return setAdResponse(repository.getLmitedDataByVend(vend));
        } else {
            return setAdResponse(repository.getLmitedData(vend, city));
        }
    }
}
