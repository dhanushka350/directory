package com.wedding.directory.service;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.payload.ADResponse;
import com.wedding.directory.repository.AdvertisementRepository;
import com.wedding.directory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
