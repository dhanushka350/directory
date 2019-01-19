package com.wedding.directory.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wedding.directory.modal.advertisement.ADProfile;
import com.wedding.directory.modal.messages.InquiryModal;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "brokers")
public class Broker {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "broker_id")
    private int id;

    @Column(name = "email")
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "nic")
    private String nic;

    @Column(name = "active")
    private int active;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "broker", fetch = FetchType.LAZY)
    private List<ADProfile> adProfiles = new ArrayList<>();

    private String adCount;
}
