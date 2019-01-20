package com.wedding.directory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Test {

    @RequestMapping(value = {"/test/index"}, method = RequestMethod.GET)
    public ModelAndView public_home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("client/index.html");
        return modelAndView;
    }

    @RequestMapping(value = {"/test/search_results"}, method = RequestMethod.GET)
    public ModelAndView public_search_results() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("client/search_results.html");
        return modelAndView;
    }
}
