package com.wedding.directory.payload;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class ADResponse {

    private int id;

    private String vendor;

    private String title;

    private String type;

    private String city;

    private String category;

    private String openingDates;

    private String openingTime;

    private String closingTime;

    private String description;

    private String facebook;

    private String twitter;

    private String experience;

    private String professionals;

    private String map;

    private String view;

    private String coverImage1;

    private String coverImage2;

    private String coverImage3;

    private String coverImage4;

    private String packageImage1;

    private String packageImage2;

    private String packageImage3;

    private String packageImage4;

    private String packageImage5;

    private String packageImage6;

    private String packageName1;

    private String packageName2;

    private String packageName3;

    private String packageName4;

    private String packageName5;

    private String packageName6;

    private String createdDate;

    private String endDate;

    private Venodr venodr;

    private String referral;

    private int status;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getReferral() {
        return referral;
    }

    public void setReferral(String referral) {
        this.referral = referral;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
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

    public Venodr getVenodr() {
        return venodr;
    }

    public void setVenodr(Venodr venodr) {
        this.venodr = venodr;
    }

    public String getPackageImage5() {
        return packageImage5;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
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
}
