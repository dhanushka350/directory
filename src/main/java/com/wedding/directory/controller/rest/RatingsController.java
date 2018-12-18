package com.wedding.directory.controller.rest;

import com.wedding.directory.payload.RatingsDTO;
import com.wedding.directory.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/ratings")
public class RatingsController {
    @Autowired
    RatingService ratingService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ResponseBody
    public String saveRatings(@RequestBody RatingsDTO ratings) {

        return ratingService.saveRatings(ratings);
    }

    @RequestMapping(value = "/getAll/{adID}", method = RequestMethod.GET)
    public List<RatingsDTO> getRatigsByAdId(@PathVariable int adID) {

        return ratingService.getRatigsByAdId(adID);
    }

}
