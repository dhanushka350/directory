package com.wedding.directory.repository;

import com.wedding.directory.modal.advertisement.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepo extends JpaRepository<City, Integer> {
    City getTopByCityEquals(String city);
}
