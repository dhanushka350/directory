package com.wedding.directory.modal.advertisement;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.wedding.directory.modal.advertisement.ADProfile;

import javax.persistence.*;

@Entity
@Table(name = "ratings")
public class Ratings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "rate_id")
    private int id;

    @Column(name = "fullName")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "city")
    private String city;

    @Column(name = "review")
    private String review;

    @Column(name = "rating")
    private double ratings;

// one rating can have one ad
    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "advertisement")
    private ADProfile adProfile;

    public Ratings() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public double getRatings() {
        return ratings;
    }

    public void setRatings(double ratings) {
        this.ratings = ratings;
    }

    public ADProfile getAdProfile() {
        return adProfile;
    }

    public void setAdProfile(ADProfile adProfile) {
        this.adProfile = adProfile;
    }
}
