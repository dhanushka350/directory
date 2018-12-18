package com.wedding.directory.service;

import com.wedding.directory.modal.Ratings;
import com.wedding.directory.modal.User;
import com.wedding.directory.payload.RatingsDTO;
import com.wedding.directory.repository.RatingsRepocitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        User user = new User();
        user.setId(rating.getVendor().getId());
        rating.setVendor(user);
        Ratings save = ratingsRepocitory.save(rating);
        if (save != null) {
            return "SUCCESS";
        } else {
            return "FAILED";
        }
    }
}
