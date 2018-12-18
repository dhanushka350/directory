package com.wedding.directory.payload;

public class RatingsDTO {

    private int id;

    private String fullName;

    private String email;

    private String mobile;

    private String city;

    private String review;

    private double ratings;

    private Venodr venodr;

    public RatingsDTO() {
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

    public Venodr getVenodr() {
        return venodr;
    }

    public void setVenodr(Venodr venodr) {
        this.venodr = venodr;
    }
}
