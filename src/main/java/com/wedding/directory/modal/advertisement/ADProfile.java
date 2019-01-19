package com.wedding.directory.modal.advertisement;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wedding.directory.modal.Broker;
import com.wedding.directory.modal.User;
import lombok.Data;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "advertisement")
public class ADProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ad_id")
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "status")
    private int active;

    @Column(name = "type")
    private String type;

    @Column(name = "opening_days")
    private String openingDates;

    @Column(name = "opening_time")
    private String openingTime;

    @Column(name = "closing_time")
    private String closingTime;

    @Column(name = "description", length = 3000)
    private String description;

    @Column(name = "facebook", length = 1500)
    private String facebook;

    @Column(name = "twitter", length = 1500)
    private String twitter;

    @Column(name = "experience")
    private String experience;

    @Column(name = "professionals")
    private String professionals;

    @Column(name = "google_map", length = 3000)
    private String map;

    @Column(name = "view")
    private String view;

    @Column(name = "cover_image_1", length = 1500)
    private String coverImage1;

    @Column(name = "cover_image_2", length = 1500)
    private String coverImage2;

    @Column(name = "cover_image_3", length = 1500)
    private String coverImage3;

    @Column(name = "cover_image_4", length = 1500)
    private String coverImage4;

    @Column(name = "created_date")
    private String adCreatedDate;

    @Column(name = "expired_date")
    private String expiredDate;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "city", nullable = false)
    @NotFound(action = NotFoundAction.IGNORE)
    private City city;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category", nullable = false)
    @NotFound(action = NotFoundAction.IGNORE)
    private Category category;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "referral")
    private Broker broker;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "packages", nullable = false)
    @NotFound(action = NotFoundAction.IGNORE)
    private Packages packages;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vendor")
    private User vendor;

    // one ad can have many ratings...
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "adProfile", fetch = FetchType.LAZY)
    private List<Ratings> rating = new ArrayList<>();


}
