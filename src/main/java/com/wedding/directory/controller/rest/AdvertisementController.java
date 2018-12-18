package com.wedding.directory.controller.rest;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.payload.ADResponse;
import com.wedding.directory.payload.AllAdvertisements;
import com.wedding.directory.service.AdvertisementService;
import com.wedding.directory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/admin")
public class AdvertisementController {

    @Autowired
    private AdvertisementService service;
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/save_advertisement/step-1", method = RequestMethod.POST)
    @ResponseBody
    public String updateProfile(@RequestBody ADResponse response) {
        System.err.println("saving");
        return service.addListing(response);
    }

    @RequestMapping(value = "/get/advertisement/details", method = RequestMethod.POST)
    @ResponseBody
    public ADProfile getDetails(@RequestBody String user) {
        User modal = userService.findUserModalByEmail(user);
        ADProfile adProfile = service.getByVendor(modal);
        System.out.println(user + "===============================================");
        return adProfile;

    }

    @RequestMapping(value = "/get/all/advertisement", method = RequestMethod.POST)
    @ResponseBody
    public List<AllAdvertisements> getAllAdsByVendor(@RequestBody String user) {
        return service.getAllAdsByVendor(user);
    }

}
