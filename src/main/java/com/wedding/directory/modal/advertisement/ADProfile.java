package com.wedding.directory.modal.advertisement;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wedding.directory.modal.User;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "advertisement")
public class ADProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ad_id")
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "type")
    private String type;

    @Column(name = "city")
    private String city;

    @Column(name = "category")
    private String category;

    @Column(name = "opening_days")
    private String openingDates;

    @Column(name = "opening_time")
    private String openingTime;

    @Column(name = "closing_time")
    private String closingTime;

    @Column(name = "description")
    private String description;

    @Column(name = "facebook")
    private String facebook;

    @Column(name = "twitter")
    private String twitter;

    @Column(name = "experience")
    private String experience;

    @Column(name = "professionals")
    private String professionals;

    @Column(name = "google_map")
    private String map;

    @Column(name = "view")
    private String view;

    @Column(name = "cover_image_1")
    private String coverImage1;

    @Column(name = "cover_image_2")
    private String coverImage2;

    @Column(name = "cover_image_3")
    private String coverImage3;

    @Column(name = "cover_image_4")
    private String coverImage4;

    @Column(name = "created_date")
    private String createdDate;

    @Column(name = "expired_date")
    private String expiredDate;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "packages", nullable = false)
    private Packages packages;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vendor")
    private User vendor;

    // one ad can have many ratings...
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "adProfile", fetch = FetchType.LAZY)
    private List<Ratings> rating = new ArrayList<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getOpeningDates() {
        return openingDates;
    }

    public void setOpeningDates(String openingDates) {
        this.openingDates = openingDates;
    }

    public String getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(String openingTime) {
        this.openingTime = openingTime;
    }

    public String getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(String closingTime) {
        this.closingTime = closingTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getProfessionals() {
        return professionals;
    }

    public void setProfessionals(String professionals) {
        this.professionals = professionals;
    }

    public String getMap() {
        return map;
    }

    public void setMap(String map) {
        this.map = map;
    }

    public String getView() {
        return view;
    }

    public void setView(String view) {
        this.view = view;
    }

    public String getCoverImage1() {
        return coverImage1;
    }

    public void setCoverImage1(String coverImage1) {
        this.coverImage1 = coverImage1;
    }

    public String getCoverImage2() {
        return coverImage2;
    }

    public void setCoverImage2(String coverImage2) {
        this.coverImage2 = coverImage2;
    }

    public String getCoverImage3() {
        return coverImage3;
    }

    public void setCoverImage3(String coverImage3) {
        this.coverImage3 = coverImage3;
    }

    public String getCoverImage4() {
        return coverImage4;
    }

    public void setCoverImage4(String coverImage4) {
        this.coverImage4 = coverImage4;
    }

    public User getVendor() {
        return vendor;
    }

    public void setVendor(User vendor) {
        this.vendor = vendor;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getExpiredDate() {
        return expiredDate;
    }

    public void setExpiredDate(String expiredDate) {
        this.expiredDate = expiredDate;
    }

    public Packages getPackages() {
        return packages;
    }

    public void setPackages(Packages packages) {
        this.packages = packages;
    }

    public List<Ratings> getRating() {
        return rating;
    }

    public void setRating(List<Ratings> rating) {
        this.rating = rating;
    }
}
