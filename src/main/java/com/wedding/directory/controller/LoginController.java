package com.wedding.directory.controller;

import com.wedding.directory.mail.EmailService;
import com.wedding.directory.modal.User;
import com.wedding.directory.payload.EmailContent;
import com.wedding.directory.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;
    @Autowired
    private EmailService emailService;


    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login.html");
        return modelAndView;
    }

    @RequestMapping(value = "/login_profile", method = RequestMethod.POST)
    @ResponseBody
    public String loginToProfile(@RequestBody User user) {
        return userService.login(user);
    }

    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public ModelAndView registration() {
        ModelAndView modelAndView = new ModelAndView();
        User user = new User();
        modelAndView.addObject("user", user);
        modelAndView.setViewName("registration.html");

        return modelAndView;
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ModelAndView createNewUser(@Valid User user, BindingResult bindingResult) {
        ModelAndView modelAndView = new ModelAndView();

        if (userService.findUserByEmail(user.getEmail())) {
            bindingResult
                    .rejectValue("email", "error.user",
                            "There is already a user registered with the email provided");
        }
        if (bindingResult.hasErrors()) {
            modelAndView.setViewName("registration.html");
        } else {
            userService.saveUser(user);
            sendRegistrationMailToAdmins(user.getEmail());
            modelAndView.setViewName("login.html");

        }
        return modelAndView;
    }

    @RequestMapping(value = "/admin/home", method = RequestMethod.GET)
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("admin/home");
        return modelAndView;
    }

    public void sendRegistrationMailToAdmins(String vendor) {
        EmailContent content = new EmailContent();
        content.setFrom("ZEEBO SYSTEM");

        // for user
        content.setTo(vendor);
        content.setSubject("Account Activation Alert!");
        content.setMessage("Your account is activated... \n ZEEBO SYSTEM");
        emailService.sendEmail(content);

        // for admins
        //        dilananushka123@gmail.com
        content.setTo("dilananushka123@gmail.com");
        content.setMessage("New account created and activated for " + vendor + "\n ZEEBO SYSTEM");
        emailService.sendEmail(content);
    }
}