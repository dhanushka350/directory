package com.wedding.directory.controller.rest;

import com.wedding.directory.payload.ADResponse;
import com.wedding.directory.payload.Inquiry;
import com.wedding.directory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "control/emails")
public class EmailController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/sent/Inquiry", method = RequestMethod.POST)
    @ResponseBody
    public String sentInquiry(@RequestBody Inquiry inquiry) {
        return userService.sentInquiry(inquiry);
    }
}
