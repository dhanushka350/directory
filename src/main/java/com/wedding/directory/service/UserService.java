package com.wedding.directory.service;

import com.wedding.directory.modal.Role;
import com.wedding.directory.modal.User;
import com.wedding.directory.repository.RoleRepository;
import com.wedding.directory.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

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


    public boolean findUserByEmail(String email) {
        System.out.println(email);
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
        user.setActive(0);
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

}
