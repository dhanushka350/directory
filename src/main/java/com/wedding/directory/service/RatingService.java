package com.wedding.directory.service;

import com.wedding.directory.modal.Ratings;
import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.payload.RatingsDTO;
import com.wedding.directory.repository.RatingsRepocitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RatingService {
    @Autowired
    RatingsRepocitory ratingsRepocitory;

    public String saveRatings(RatingsDTO ratings) {

        Ratings rating = new Ratings();
        rating.setEmail(ratings.getEmail());
        rating.setCity(ratings.getCity());
        rating.setFullName(ratings.getFullName());
        rating.setMobile(ratings.getMobile());
        rating.setRatings(ratings.getRatings());
        rating.setReview(ratings.getReview());

        ADProfile adProfile = new ADProfile();
        adProfile.setId(ratings.getAdID());
        rating.setAdProfile(adProfile);


        Ratings save = ratingsRepocitory.save(rating);
        if (save != null) {
            return "SUCCESS";
        } else {
            return "FAILED";
        }
    }

    public List<RatingsDTO> getRatigsByAdId(int adID) {
        List<RatingsDTO> ratingsDTOS = new ArrayList<>();
        List<Ratings> ratingsByAdProfileId = ratingsRepocitory.getRatingsByAdProfileId(adID);
        RatingsDTO ratingsDTO;
        if (ratingsByAdProfileId != null) {
            for (Ratings ratings : ratingsByAdProfileId) {
                ratingsDTO = new RatingsDTO();
                ratingsDTO.setAdID(ratings.getAdProfile().getId());
                ratingsDTO.setEmail(ratings.getEmail());
                ratingsDTO.setCity(ratings.getCity());
                ratingsDTO.setFullName(ratings.getFullName());
                ratingsDTO.setMobile(ratings.getMobile());
                ratingsDTO.setRatings(ratings.getRatings());
                ratingsDTO.setReview(ratings.getReview());
                ratingsDTOS.add(ratingsDTO);
            }
        }
        return ratingsDTOS;
    }
}
