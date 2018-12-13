package com.wedding.directory.repository;

import com.wedding.directory.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    boolean existsByEmail(String mail);
}