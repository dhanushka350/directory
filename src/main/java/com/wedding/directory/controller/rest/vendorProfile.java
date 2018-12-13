package com.wedding.directory.controller.rest;

import com.wedding.directory.modal.User;
import com.wedding.directory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping(value = "/admin")
public class vendorProfile {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/view_profile", method = RequestMethod.POST)
    @ResponseBody
    public User viewProfile(@RequestBody String name) {
        return userService.findUserModalByEmail(name);
    }

    @RequestMapping(value = "/update_profile", method = RequestMethod.POST)
    @ResponseBody
    public String updateProfile(@RequestBody User user) {
        System.err.println("updating " + user.getId());
        User email = userService.findUserModalByEmail(user.getEmail());
        email.setAddress(user.getAddress());
        email.setEmail(user.getEmail());
        email.setLastName(user.getLastName());
        email.setDob(user.getDob());
        email.setName(user.getName());
        email.setPhone(user.getPhone());
        userService.saveUser(email);
        return "updated";
    }
}
