package com.wedding.directory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/main")
public class ClientController {

    @RequestMapping(value = {"/index"}, method = RequestMethod.GET)
    public ModelAndView public_home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("client/index.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/search_results"}, method = RequestMethod.GET)
    public ModelAndView public_search_results() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("client/search_results.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/advertisement"}, method = RequestMethod.GET)
    public ModelAndView public_advertisement() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("client/advertisement.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/category"}, method = RequestMethod.GET)
    public ModelAndView public_categories() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("client/category.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/registration"}, method = RequestMethod.GET)
    public ModelAndView public_registration() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("client/register.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public ModelAndView public_login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("client/login.html");
        return modelAndView;
    }
}
