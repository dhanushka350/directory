package com.wedding.directory.controller.rest;

import com.wedding.directory.mail.EmailService;
import com.wedding.directory.modal.User;
import com.wedding.directory.payload.EmailContent;
import com.wedding.directory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping(value = "/admin")
public class vendorProfile {

    @Autowired
    private UserService userService;
    @Autowired
    private EmailService emailService;

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
        email.setActive(1);
        userService.updateVendorProfile(email);
        return "updated";
    }

    @RequestMapping(value = "/recover/email", method = RequestMethod.POST)
    @ResponseBody
    public String emailRecover(@RequestBody String email) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        User user = userService.findUserModalByEmail(email);
        if (user != null) {
            EmailContent content = new EmailContent();
            content.setSubject("PASSWORD RECOVER");
            content.setMessage("you requested your zeebo password at " + dtf.format(now) + ". your password is " + user.getPassword() + ". Thank You...");
            content.setTo(email);
            content.setFrom("ZEEBO SYSTEM");
            emailService.sendEmail(content);
            return "Please check your email.";
        } else {
            return "You have to verify this email address first.. \n please contact us for more information. \n 0711215863";
        }
    }
}
