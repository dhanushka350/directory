package com.wedding.directory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/admin")
public class VendorController {

    @RequestMapping(value = "/all/advertisements", method = RequestMethod.GET)
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-all-listing");
        return modelAndView;
    }

    @RequestMapping(value = "/db/claim", method = RequestMethod.GET)
    public ModelAndView db_claim() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-claim");
        return modelAndView;
    }

    @RequestMapping(value = "/db/invoice", method = RequestMethod.GET)
    public ModelAndView invoice() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-invoice");
        return modelAndView;
    }

    @RequestMapping(value = "/db/invoice/all", method = RequestMethod.GET)
    public ModelAndView invoice_all() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-invoice-all");
        return modelAndView;
    }

    @RequestMapping(value = "/invoice/download", method = RequestMethod.GET)
    public ModelAndView invoice_download() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-invoice-download");
        return modelAndView;
    }

    @RequestMapping(value = "/db/add/listing", method = RequestMethod.GET)
    public ModelAndView add_listing() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-listing-add");
        return modelAndView;
    }

    @RequestMapping(value = "/db/listing/edit", method = RequestMethod.GET)
    public ModelAndView edit_listing() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-listing-edit");
        return modelAndView;
    }

    @RequestMapping(value = "/db/listing/more_info", method = RequestMethod.GET)
    public ModelAndView more_info() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-listing-more-info");
        return modelAndView;
    }

    @RequestMapping(value = "/db/message", method = RequestMethod.GET)
    public ModelAndView message() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-message");
        return modelAndView;
    }

    @RequestMapping(value = "/db/my_profile", method = RequestMethod.GET)
    public ModelAndView profile() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/home");
        return modelAndView;
    }

    @RequestMapping(value = "/db/profile/edit", method = RequestMethod.GET)
    public ModelAndView profile_edit() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-my-profile-edit");
        return modelAndView;
    }

    @RequestMapping(value = "/db/payment", method = RequestMethod.GET)
    public ModelAndView payment() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-payment");
        return modelAndView;
    }

    @RequestMapping(value = "/db/post/advertisements", method = RequestMethod.GET)
    public ModelAndView post_ad() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-post-ads");
        return modelAndView;
    }

    @RequestMapping(value = "/db/reviews", method = RequestMethod.GET)
    public ModelAndView reviews() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-review");
        return modelAndView;
    }

    @RequestMapping(value = "/db/settings", method = RequestMethod.GET)
    public ModelAndView setting() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/db-setting");
        return modelAndView;
    }
}
