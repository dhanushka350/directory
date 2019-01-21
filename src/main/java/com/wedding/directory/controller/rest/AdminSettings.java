package com.wedding.directory.controller.rest;

import com.wedding.directory.modal.Broker;
import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.Category;
import com.wedding.directory.modal.advertisement.City;
import com.wedding.directory.payload.*;
import com.wedding.directory.service.StaffService;
import com.wedding.directory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/staff")
public class AdminSettings {

    @Autowired
    private StaffService staffService;
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/save/new/area", method = RequestMethod.POST)
    @ResponseBody
    public String saveAd(@RequestBody Area response) {
        return staffService.saveCity(response);
    }

    @RequestMapping(value = "/get/city/list", method = RequestMethod.GET)
    @ResponseBody
    public Page<City> getAllCity(Pageable pageable) {
        return staffService.getCityList(pageable);
    }

    @RequestMapping(value = "/save/new/category", method = RequestMethod.POST)
    @ResponseBody
    public String saveCategory(@RequestBody CategoryDto response) {
        return staffService.saveCategory(response);
    }

    @RequestMapping(value = "/get/category/list", method = RequestMethod.GET)
    @ResponseBody
    public Page<Category> getAllCategory(Pageable pageable) {
        return staffService.getCategoryList(pageable);
    }

    @RequestMapping(value = "/get/all/ads", method = RequestMethod.GET)
    @ResponseBody
    public List<ADResponse> getAllAds(Pageable pageable) {
        return staffService.getAllAds(pageable);
    }

    @RequestMapping(value = "/getOne/{addID}", method = RequestMethod.GET)
    public ADResponse getOneAdvertiesment(@PathVariable String addID) {
        System.err.println(addID + "//////////");
        return staffService.getOneAdvertiesment(addID);
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public String saveBroker(@RequestBody User user) {
        System.err.println(user.getName());
        System.err.println(user.getEmail());
        return userService.saveBrokers(user);
    }

    @RequestMapping(value = "/get/all/brokers", method = RequestMethod.GET)
    @ResponseBody
    public Page<Broker> getAllBrokers(Pageable pageable) {
        return staffService.getAllBrokers(pageable);
    }

    @RequestMapping(value = "/getBroker/{brokerNIC}", method = RequestMethod.GET)
    public BrokerPayload getOneBroker(@PathVariable String brokerNIC) {
        return staffService.getBrokerByNic(brokerNIC);
    }

    @RequestMapping(value = "/save/vendor", method = RequestMethod.POST)
    @ResponseBody
    public String saveAd(@RequestBody Venodr response) {

        return staffService.saveVendor(response);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestBody User user) {
        return staffService.vendorLogin(user);
    }
}
