package com.wedding.directory.controller.rest;

import com.wedding.directory.payload.RatingsDTO;
import com.wedding.directory.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/ratings")
public class RatingsController {
    @Autowired
    RatingService ratingService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String saveRatings(RatingsDTO ratings) {
        System.out.println("hit");
        return ratingService.saveRatings(ratings);
    }


}
