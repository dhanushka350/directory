package com.wedding.directory.service;

import com.wedding.directory.modal.Broker;
import com.wedding.directory.modal.Role;
import com.wedding.directory.modal.User;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.modal.advertisement.Category;
import com.wedding.directory.modal.advertisement.City;
import com.wedding.directory.payload.*;
import com.wedding.directory.repository.*;
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
    @Qualifier("roleRepository")
    @Autowired
    private RoleRepository roleRepository;

    @Qualifier("userRepository")
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BrokerRepo brokerRepo;

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
            response.setCreatedDate(adProfile.getAdCreatedDate());
            response.setEndDate(adProfile.getExpiredDate());
            response.setStatus(adProfile.getActive());

            try {
                response.setReferral(adProfile.getBroker().getNic());
            } catch (NullPointerException e) {
                response.setReferral("ZBZ-DEF-U-000-000-000-XV");
            }

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
            adResponse.setCreatedDate(adProfile.getAdCreatedDate());

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
            System.err.println(venodr.getPhone());
            try {
                adResponse.setReferral(adProfile.getBroker().getNic());
            } catch (NullPointerException e) {
                adResponse.setReferral("ZBZ-DEF-U-000-000-000-XV");
            }
        }
        return adResponse;
    }

    public Page<Broker> getAllBrokers(Pageable pageable) {

        return brokerRepo.findAll(pageable);
    }

    public BrokerPayload getBrokerByNic(String id) {
        Broker top = brokerRepo.findTopByNicEquals(id);
        BrokerPayload payload = new BrokerPayload();
        if (top != null) {
            payload.setNic(top.getNic());
            payload.setRefferals(top.getAdProfiles().size() + "");
            payload.setEmail(top.getEmail());
            payload.setAddress(top.getAddress());
            payload.setActive(top.getActive());
            payload.setName(top.getName());
        }
        return payload;
    }

    public String saveVendor(Venodr response) {
        User user = userRepository.findByEmail(response.getEmail());
        if (user == null) {
            user = new User();
            user.setName(response.getName());
            user.setEmail(response.getEmail());
            user.setPassword(response.getPassword());
            user.setLastName("please update profile");
            user.setActive(1);
            userRepository.save(user);
            return "/main/login";
        } else {
            return "ERROR";
        }
    }

    public String vendorLogin(User user) {
        System.err.println("==================================================");
        User email = userRepository.findByEmail(user.getEmail());
        if (email != null) {
            if (email.getPassword().equalsIgnoreCase(user.getPassword())) {
                for (Role role : email.getRoles()) {
                    if (role.getRole().equalsIgnoreCase("ADMIN")) {
                        return "/system/admin/home";
                    }
                }
                return "/admin/home";
            } else {
                return "WRONG PASSWORD";
            }
        } else {
            return "WRONG EMAIL";
        }
    }
}
