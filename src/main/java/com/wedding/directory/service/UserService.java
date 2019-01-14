package com.wedding.directory.service;

import com.wedding.directory.mail.EmailService;
import com.wedding.directory.modal.Role;
import com.wedding.directory.modal.User;
import com.wedding.directory.modal.messages.InquiryModal;
import com.wedding.directory.payload.EmailContent;
import com.wedding.directory.payload.Inquiry;
import com.wedding.directory.repository.InquiryRepo;
import com.wedding.directory.repository.RoleRepository;
import com.wedding.directory.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.HashSet;

@Service("userService")
public class UserService {

    @Qualifier("userRepository")
    @Autowired
    private UserRepository userRepository;
    @Qualifier("roleRepository")
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AdvertisementService advertisementService;
    @Autowired
    private InquiryRepo inquiryRepo;
    @Autowired
    private EmailService emailService;

    public boolean findUserByEmail(String email) {

        return userRepository.existsByEmail(email);
    }

    public User findUserModalByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findByID(int id) {
        return userRepository.getOne(id);
    }

    public void saveUser(User user) {
        user.setPassword(user.getPassword());
        user.setActive(1);
        Role userRole = roleRepository.findByRole("VENDOR");
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
        userRepository.save(user);
    }

    public void updateVendorProfile(User user) {
        userRepository.save(user);
    }

    public String login(User user) {
        User byEmail = userRepository.findByEmail(user.getEmail());
        if (byEmail == null) {
            return "WRONG EMAIL";
        } else {
            if (byEmail.getActive() == 0) {
                return "home/profile/pending";
            }
            if (byEmail.getPassword().equalsIgnoreCase(user.getPassword())) {
                return "admin/home";
            } else {
                return "WRONG PASSWORD";
            }
        }
    }

    public String sentInquiry(Inquiry inquiry) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        String vendor = advertisementService.getOneAdvertiesment(inquiry.getAd() + "").getVendor();
        User user = userRepository.findByEmail(vendor);
        InquiryModal inquiryModal = new InquiryModal();
        inquiryModal.setCity(inquiry.getCity());
        inquiryModal.setDate(dtf.format(now));
        inquiryModal.setEmail(inquiry.getEmail());
        inquiryModal.setMobile(inquiry.getMobile());
        inquiryModal.setName(inquiry.getName());
        inquiryModal.setStatus(inquiry.getStatus());
        inquiryModal.setMessage(inquiry.getMessage());
        inquiryModal.setUser(user);
        InquiryModal save = inquiryRepo.save(inquiryModal);
        if (save != null) {
            EmailContent content = new EmailContent();
            content.setTo(user.getEmail());
            content.setFrom("zeebo directory");
            content.setSubject("New Message");
            content.setMessage("you have new message from " + inquiry.getName() + ".");
            emailService.sendEmail(content);
            return "SUCCESS";
        }
        return "FAILED";
    }

}
