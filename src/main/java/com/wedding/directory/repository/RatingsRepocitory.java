package com.wedding.directory.repository;

import com.wedding.directory.modal.Ratings;
import com.wedding.directory.payload.RatingsDTO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RatingsRepocitory extends JpaRepository<Ratings, Integer> {

    public List<Ratings> getRatingsByAdProfileId(int adID);

}
