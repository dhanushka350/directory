package com.wedding.directory.service;

import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.modal.advertisement.Category;
import com.wedding.directory.modal.advertisement.City;
import com.wedding.directory.payload.*;
import com.wedding.directory.repository.AdvertisementRepository;
import com.wedding.directory.repository.CategoryRepo;
import com.wedding.directory.repository.CityRepo;
import com.wedding.directory.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
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
    @Qualifier("userRepository")
    @Autowired
    private UserRepository userRepository;

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
        System.err.println(pageable.getPageNumber());
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
            response.setReferral(adProfile.getReferral().getNic());
            response.setEndDate(adProfile.getExpiredDate());
            response.setStatus(adProfile.getActive());
            list.add(response);
        }
        return list;
    }

    public ADResponse getOneAdvertiesment(String addID) {
        System.err.println("qewqewew");
        ADResponse adResponse = new ADResponse();
        if (Integer.parseInt(addID) == 0) {
            return adResponse;
        }
        ADProfile adProfile = advertisementRepository.getOne(Integer.parseInt(addID));

        if (adProfile != null) {
            adResponse.setId(adProfile.getId());
            adResponse.setVendor(adProfile.getVendor().getEmail());
            adResponse.setTitle(adProfile.getTitle());
            adResponse.setType(adProfile.getType());
            adResponse.setCity(adProfile.getCity().getCity());
            adResponse.setCategory(adProfile.getCategory().getCategory());
            adResponse.setOpeningTime(adProfile.getOpeningTime());
            adResponse.setOpeningDates(adProfile.getOpeningDates());
            adResponse.setClosingTime(adProfile.getClosingTime());
            adResponse.setDescription(adProfile.getDescription());
            adResponse.setFacebook(adProfile.getFacebook());
            adResponse.setTwitter(adProfile.getTwitter());
            adResponse.setExperience(adProfile.getExperience());
            adResponse.setProfessionals(adProfile.getProfessionals());
            adResponse.setMap(adProfile.getMap());
            adResponse.setView(adProfile.getView());
            adResponse.setCoverImage1(adProfile.getCoverImage1());
            adResponse.setCoverImage2(adProfile.getCoverImage2());
            adResponse.setCoverImage3(adProfile.getCoverImage3());
            adResponse.setCoverImage4(adProfile.getCoverImage4());
            adResponse.setCreatedDate(adProfile.getCreatedDate());
            adResponse.setReferral(adProfile.getReferral().getNic());
            adResponse.setStatus(adProfile.getActive());
            Venodr venodr = new Venodr();
            venodr.setId(adProfile.getVendor().getId());
            venodr.setEmail(adProfile.getVendor().getEmail());
            venodr.setName(adProfile.getVendor().getName());
            venodr.setLastName(adProfile.getVendor().getLastName());
            venodr.setPhone(adProfile.getVendor().getPhone());
            venodr.setDob(adProfile.getVendor().getNic());
            venodr.setAddress(adProfile.getVendor().getAddress());
            venodr.setActive(adProfile.getVendor().getActive());
            venodr.setImage(adProfile.getVendor().getImage());
            adResponse.setVenodr(venodr);

        }
        return adResponse;
    }

    public List<BrokerPayload> getAllBrokers(Pageable pageable) {
        List<BrokerPayload> list = new ArrayList<>();
        BrokerPayload payload = null;
        for (User user : userRepository.findAll(pageable)) {
            payload = new BrokerPayload();
            payload.setName(user.getName());
            payload.setActive(user.getActive());
            payload.setAddress(user.getAddress());
            payload.setEmail(user.getEmail());
            payload.setId(user.getId());
            payload.setRefferals("" + user.getReferrals().size());
            payload.setNic(user.getNic());
            list.add(payload);
        }
        return list;
    }

}
