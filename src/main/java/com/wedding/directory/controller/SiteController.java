package com.wedding.directory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SiteController {

    @RequestMapping(value = {"/"}, method = RequestMethod.GET)
    public ModelAndView public_home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        return modelAndView;
    }

    @RequestMapping(value = {"/home/listing/vendors"}, method = RequestMethod.GET)
    public ModelAndView searchVendors() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("listing");
        return modelAndView;
    }

    @RequestMapping(value = {"/home/listing/all-vendors"}, method = RequestMethod.GET)
    public ModelAndView allVendors() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("all-listing");
        return modelAndView;
    }

    @RequestMapping(value = {"/home/listing/vendor-profile"}, method = RequestMethod.GET)
    public ModelAndView vendorProfile() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("vendor-profile");
        return modelAndView;
    }

    @RequestMapping(value = {"home/about-us"}, method = RequestMethod.GET)
    public ModelAndView contactUs() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("about-us");
        return modelAndView;
    }

    @RequestMapping(value = {"home/vendor-profile-details"}, method = RequestMethod.GET)
    public ModelAndView details() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("listing-details");
        return modelAndView;
    }

    @RequestMapping(value = {"home/help-center"}, method = RequestMethod.GET)
    public ModelAndView help() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("faq");
        return modelAndView;
    }

    @RequestMapping(value = {"home/help/recover-password"}, method = RequestMethod.GET)
    public ModelAndView frogot_pass() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("forget-password");
        return modelAndView;
    }

    @RequestMapping(value = {"home/developers_area"}, method = RequestMethod.GET)
    public ModelAndView developers() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("developers");
        return modelAndView;
    }

    @RequestMapping(value = {"home/fileStorage"}, method = RequestMethod.GET)
    public ModelAndView uploads() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("uploads");
        return modelAndView;
    }

    @RequestMapping(value = {"home/fileStorage/ads"}, method = RequestMethod.GET)
    public ModelAndView aduploads() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("aduploads");
        return modelAndView;
    }

    @RequestMapping(value = {"home/fileStorage/ads/upload"}, method = RequestMethod.GET)
    public ModelAndView multiUploads() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("multi-uploads");
        return modelAndView;
    }
}
