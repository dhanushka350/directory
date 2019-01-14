package com.wedding.directory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/system/admin")
public class AdminController {
    @RequestMapping(value = {"/home"}, method = RequestMethod.GET)
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("staff/home.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/service/areas"}, method = RequestMethod.GET)
    public ModelAndView areas() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("staff/area.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/service/category"}, method = RequestMethod.GET)
    public ModelAndView category() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("staff/category.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/service/advertisements"}, method = RequestMethod.GET)
    public ModelAndView ads() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("staff/advertisements.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/service/manage/advertisement"}, method = RequestMethod.GET)
    public ModelAndView adManager() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("staff/manage_advertisements.html");
        return modelAndView;
    }
}
