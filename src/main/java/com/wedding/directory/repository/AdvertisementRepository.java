package com.wedding.directory.repository;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdvertisementRepository extends JpaRepository<ADProfile, Integer> {
    ADProfile findTopByVendor(User user);

    @Query(value = "select * from advertisement LIMIT 17; ", nativeQuery = true)
    List<ADProfile> getLmitedData();

    @Query(value = "SELECT DISTINCT city FROM advertisement", nativeQuery = true)
    List<String> getDistinctByCity();

    @Query(value = "SELECT DISTINCT category FROM advertisement", nativeQuery = true)
    List<String> getAllVenoCat();
}
