package com.wedding.directory.service;

import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.modal.advertisement.Category;
import com.wedding.directory.modal.advertisement.City;
import com.wedding.directory.payload.ADResponse;
import com.wedding.directory.payload.Area;
import com.wedding.directory.payload.CategoryDto;
import com.wedding.directory.repository.AdvertisementRepository;
import com.wedding.directory.repository.CategoryRepo;
import com.wedding.directory.repository.CityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StaffService {
    @Autowired
    private CityRepo cityRepo;
    @Autowired
    private CategoryRepo categoryRepo;
    @Autowired
    private AdvertisementRepository advertisementRepository;

    public String saveCity(Area area) {
        City top = cityRepo.getTopByCityEquals(area.getCity());
        if (top == null) {
            top = new City();
            top.setCity(area.getCity());
            cityRepo.save(top);
            return "City |- " + area.getCity() + " -| is successfully saved.";
        } else {
            return "Sorry! |- " + area.getCity() + " -| is already saved. Try another one.";
        }
    }

    public Page<City> getCityList(Pageable pageable) {
        return cityRepo.findAll(pageable);
    }

    public String saveCategory(CategoryDto dto) {
        Category category = categoryRepo.getTopByCategoryEquals(dto.getCategory());
        if (category == null) {
            category = new Category();
            category.setCategory(dto.getCategory());
            categoryRepo.save(category);
            return "Category |- " + dto.getCategory() + " -| is successfully saved.";
        } else {
            return "Sorry! |- " + dto.getCategory() + " -| is already saved. Try another one.";
        }
    }

    public Page<Category> getCategoryList(Pageable pageable) {
        return categoryRepo.findAll(pageable);
    }

    public List<ADResponse> getAllAds(Pageable pageable) {
        List<ADResponse> list = new ArrayList<>();
        ADResponse response = null;
        for (ADProfile adProfile : advertisementRepository.findAll(pageable)) {
            response = new ADResponse();
            response.setId(adProfile.getId());
            response.setVendor(adProfile.getVendor().getEmail());
            response.setTitle(adProfile.getTitle());
            response.setType(adProfile.getType());
            response.setCity(adProfile.getCity().getCity());
            response.setCategory(adProfile.getCategory().getCategory());
            response.setOpeningTime(adProfile.getOpeningTime());
            response.setOpeningDates(adProfile.getOpeningDates());
            response.setClosingTime(adProfile.getClosingTime());
            response.setDescription(adProfile.getDescription());
            response.setFacebook(adProfile.getFacebook());
            response.setTwitter(adProfile.getTwitter());
            response.setExperience(adProfile.getExperience());
            response.setProfessionals(adProfile.getProfessionals());
            response.setMap(adProfile.getMap());
            response.setView(adProfile.getView());
            response.setCoverImage1(adProfile.getCoverImage1());
            response.setCoverImage2(adProfile.getCoverImage2());
            response.setCoverImage3(adProfile.getCoverImage3());
            response.setCoverImage4(adProfile.getCoverImage4());
            response.setCreatedDate(adProfile.getCreatedDate());
            response.setReferral(adProfile.getReferral());
            response.setEndDate(adProfile.getExpiredDate());
            response.setStatus(adProfile.getActive());
            list.add(response);
        }
        return list;
    }
}
