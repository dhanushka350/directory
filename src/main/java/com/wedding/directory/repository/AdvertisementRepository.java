package com.wedding.directory.repository;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.modal.advertisement.Category;
import com.wedding.directory.modal.advertisement.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdvertisementRepository extends JpaRepository<ADProfile, Integer> {
    ADProfile findTopByVendorAndIdEquals(User user, int id);

    ADProfile findTopByVendor(User user);

    ADProfile getById(int id);

    List<ADProfile> getAll17ByActiveEquals(int active);

    @Query(value = "SELECT DISTINCT city FROM advertisement", nativeQuery = true)
    List<String> getDistinctByCity();

    @Query(value = "SELECT DISTINCT category FROM advertisement", nativeQuery = true)
    List<String> getAllVenoCat();


    List<ADProfile> getTop17ByCityEquals(City city);

    List<ADProfile> getTop17ByCategoryEquals(Category category);

    List<ADProfile> getTop17ByCityEqualsAndCategoryEquals(City city, Category category);

    List<ADProfile> getAllByCityEqualsAndCategoryEquals(City city, Category cate);

    List<ADProfile> findAllByVendorEquals(User user);
}
