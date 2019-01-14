package com.wedding.directory.modal.advertisement;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "city")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "city_id")
    private int id;

    @Column(name = "city_name")
    private String city;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "city", fetch = FetchType.LAZY)
    private List<ADProfile> adProfiles = new ArrayList<>();

    private int adCount;

    public int getAdCount() {
        this.adCount = adProfiles.size();
        return adCount;
    }

    public void setAdCount(int adCount) {
        this.adCount = adCount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<ADProfile> getAdProfiles() {
        return adProfiles;
    }

    public void setAdProfiles(List<ADProfile> adProfiles) {
        this.adProfiles = adProfiles;
    }

    @Override
    public String toString() {
        return "City{" +
                "id=" + id +
                ", city='" + city + '\'' +
                ", adProfiles=" + adProfiles +
                ", adCount=" + adCount +
                '}';
    }
}
