package com.wedding.directory.modal.advertisement;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "category_id")
    private int id;

    @Column(name = "category_name")
    private String category;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category", fetch = FetchType.LAZY)
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<ADProfile> getAdProfiles() {
        return adProfiles;
    }

    public void setAdProfiles(List<ADProfile> adProfiles) {
        this.adProfiles = adProfiles;
    }
}
