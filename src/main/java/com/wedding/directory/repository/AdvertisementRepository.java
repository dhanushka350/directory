package com.wedding.directory.repository;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvertisementRepository extends JpaRepository<ADProfile, Integer> {
    ADProfile findTopByVendor(User user);
}
