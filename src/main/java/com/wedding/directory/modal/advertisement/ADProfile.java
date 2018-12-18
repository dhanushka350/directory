package com.wedding.directory.modal.advertisement;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.wedding.directory.modal.User;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

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

    @Column(name = "package_image_1")
    private String packageImage1;

    @Column(name = "package_image_2")
    private String packageImage2;

    @Column(name = "package_image_3")
    private String packageImage3;

    @Column(name = "package_image_4")
    private String packageImage4;

    @Column(name = "package_image_5")
    private String packageImage5;

    @Column(name = "package_image_6")
    private String packageImage6;

    @Column(name = "package_Name_1")
    private String packageName1;

    @Column(name = "package_Name_2")
    private String packageName2;

    @Column(name = "package_Name_3")
    private String packageName3;

    @Column(name = "package_Name_4")
    private String packageName4;

    @Column(name = "package_Name_5")
    private String packageName5;

    @Column(name = "package_Name_6")
    private String packageName6;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "expired_date")
    private Date expiredDate;

    @Column(name = "ad_type")
    private String adType;


    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vendor")
    private User vendor;

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

    public String getPackageImage1() {
        return packageImage1;
    }

    public void setPackageImage1(String packageImage1) {
        this.packageImage1 = packageImage1;
    }

    public String getPackageImage2() {
        return packageImage2;
    }

    public void setPackageImage2(String packageImage2) {
        this.packageImage2 = packageImage2;
    }

    public String getPackageImage3() {
        return packageImage3;
    }

    public void setPackageImage3(String packageImage3) {
        this.packageImage3 = packageImage3;
    }

    public String getPackageImage4() {
        return packageImage4;
    }

    public void setPackageImage4(String packageImage4) {
        this.packageImage4 = packageImage4;
    }

    public String getPackageImage5() {
        return packageImage5;
    }

    public void setPackageImage5(String packageImage5) {
        this.packageImage5 = packageImage5;
    }

    public String getPackageImage6() {
        return packageImage6;
    }

    public void setPackageImage6(String packageImage6) {
        this.packageImage6 = packageImage6;
    }

    public String getPackageName1() {
        return packageName1;
    }

    public void setPackageName1(String packageName1) {
        this.packageName1 = packageName1;
    }

    public String getPackageName2() {
        return packageName2;
    }

    public void setPackageName2(String packageName2) {
        this.packageName2 = packageName2;
    }

    public String getPackageName3() {
        return packageName3;
    }

    public void setPackageName3(String packageName3) {
        this.packageName3 = packageName3;
    }

    public String getPackageName4() {
        return packageName4;
    }

    public void setPackageName4(String packageName4) {
        this.packageName4 = packageName4;
    }

    public String getPackageName5() {
        return packageName5;
    }

    public void setPackageName5(String packageName5) {
        this.packageName5 = packageName5;
    }

    public String getPackageName6() {
        return packageName6;
    }

    public void setPackageName6(String packageName6) {
        this.packageName6 = packageName6;
    }

    public User getVendor() {
        return vendor;
    }

    public void setVendor(User vendor) {
        this.vendor = vendor;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getExpiredDate() {
        return expiredDate;
    }

    public void setExpiredDate(Date expiredDate) {
        this.expiredDate = expiredDate;
    }

    public String getAdType() {
        return adType;
    }

    public void setAdType(String adType) {
        this.adType = adType;
    }
}
