package com.rentalsphere.backend.PropertyApplication.Model;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "PropertyApplications")
public class PropertyApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PropertyApplicationID")
    private Long propertyApplicationID;

    @ManyToOne
    @JoinColumn(name = "userID") // This is the foreign key column in PropertyApplications table
    private User user;

    @Column(name = "CompanyName")
    private String companyName;

    @Column(name = "EmailAddress", nullable = false)
    private String emailAddress;

    @Column(name = "CountryCode", nullable = false)
    private String countryCode;

    @Column(name = "PhoneNumber", nullable = false)
    private String phoneNumber;

    @Column(name = "PropertyType", nullable = false)
    private String propertyType;

    @Column(name = "PropertyAddress", nullable = false)
    private String propertyAddress;

    @Column(name = "City", nullable = false)
    private String city;

    @Column(name = "State", nullable = false)
    private String state;

    @Column(name = "ZIPCode", nullable = false)
    private String zipCode;

    @Column(name = "MonthlyRent", nullable = false)
    private Double monthlyRent;

    @Column(name = "LeaseTerms", nullable = false)
    private String leaseTerms;

    @Column(name = "AvailableMoveInDate", nullable = false)
    private Date availableMoveInDate;

    @Column(name = "NumBedrooms", nullable = false)
    private Integer numBedrooms;

    @Column(name = "NumBathrooms", nullable = false)
    private Integer numBathrooms;

    @Column(name = "Amenities")
    private String amenities;

    @Column(name = "PropertyDescription", columnDefinition = "TEXT")
    private String propertyDescription;

    @Column(name = "SpecialRequirements", columnDefinition = "TEXT")
    private String specialRequirements;

    @Column(name = "CommunicationConsent", nullable = false)
    private Boolean communicationConsent;

    @Column(name = "EmailContact", nullable = false)
    private Boolean emailContact;

    @Column(name = "PhoneContact", nullable = false)
    private Boolean phoneContact;

    @Column(name = "ConsentGiven", nullable = false)
    private Boolean consentGiven;

    @Column(name = "ApplicationStatusID", nullable = false)
    private String applicationStatusID;

    @Column(name = "CreationDate", nullable = false)
    private Date creationDate;

    @Column(name = "ModificationDate", nullable = false)
    private Date modificationDate;

}

