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

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service("userService")
public class UserService implements InitializingBean {

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
        Role userRole = roleRepository.findByRole("VENDOR");// VENDOR
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
        userRepository.save(user);
    }

    public String saveBrokers(User user) {
        System.err.println(user.getNic());
        User top = userRepository.findTopByNicEquals(user.getNic());
        if (top != null) {
            Set<Role> roles = top.getRoles();
            Role userRole = roleRepository.findByRole("BROKER");// VENDOR / ADMIN
            roles.add(userRole);
            User update = userRepository.saveAndFlush(top);
            if (update != null) {
                return user.getName() + " got a new role.";
            } else {
                return "This nic already registered in our system. \n but we can't add this role now.";
            }
        } else {
            Role userRole = roleRepository.findByRole("BROKER");// VENDOR / ADMIN
            user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
            user.setPassword(user.getEmail() + "@directory");
            user.setLastName("NOT ADDED.");
            User save = userRepository.save(user);
            if (save != null) {
                return "Successfully Added.";
            } else {
                return "Failed.";
            }
        }
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
                for (Role role : byEmail.getRoles()) {
                    System.err.println(role.getRole());
                    if (role.getRole().equalsIgnoreCase("ADMIN")) {
                        return "system/admin/home";
                    }
                }
                ;
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

    public User getByNIC(String nic) {
        return userRepository.findTopByNicEquals(nic);
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        Set<Role> roles = new HashSet<>();
        Role adminRole = new Role();
        adminRole.setId(1);
        adminRole.setRole("ADMIN");
        adminRole = roleRepository.save(adminRole);
        roles.add(adminRole);

        User admin = new User();
        admin.setName("ADMIN");
        admin.setLastName("ADMIN");
        admin.setPassword("ADMIN");
        admin.setNic("never mind");
        admin.setActive(1);
        admin.setPhone("never mind");
        admin.setEmail("ADMIN@ADMIN.COM");
        admin.setAddress("never mind");
        admin.setId(1);
        admin.setRoles(roles);
        userRepository.save(admin);
    }
}
