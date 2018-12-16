package com.wedding.directory.controller.rest;

import com.wedding.directory.payload.ADResponse;
import com.wedding.directory.service.AdvertisementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/advertisement")
public class FrontPageAdvertiesmentController {
    @Autowired
    private AdvertisementService service;

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public List<ADResponse> getAll() {
        return service.getAll();
    }

    @RequestMapping(value = "/getAllCities", method = RequestMethod.GET)
    public List<String> getAllCity() {
        return service.getAllCity();
    }

    @RequestMapping(value = "/getAllVendorCat", method = RequestMethod.GET)
    public List<String> getAllVenoCat() {
        return service.getAllVenoCat();
    }

    @RequestMapping(value = "/getTop", method = RequestMethod.GET)
    public List<ADResponse> getTopRatedAdvertiesments() {
        return service.getTopRatedAdvertiesments();
    }

    @RequestMapping(value = "/getTopByCity/{city}/{vend}", method = RequestMethod.GET)
    public List<ADResponse> getTopRatedAdvertiesmentsByCity(@PathVariable String city, @PathVariable String vend) {
        return service.getTopRatedAdvertiesments(city, vend);
    }

    @RequestMapping(value = "/getOne/{addID}", method = RequestMethod.GET)
    public ADResponse getOneAdvertiesment(@PathVariable String addID) {
        return service.getOneAdvertiesment(addID);
    }
}


