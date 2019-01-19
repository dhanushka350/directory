package com.wedding.directory.repository;

import com.wedding.directory.modal.Role;
import com.wedding.directory.modal.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    boolean existsByEmail(String mail);

    User findTopByNicEquals(String nic);

    List<User> findAllByRolesContaining(Role role, Pageable pageable);
}