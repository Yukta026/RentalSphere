package com.rentalsphere.backend.Property.Model;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.rentalsphere.backend.Enums.ApplicationStatus;
import com.rentalsphere.backend.User.Model.User;
import com.rentalsphere.backend.Utils.PropertyImages.Model.PropertyImages;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.UUID;


@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "PropertyApplications")
@Entity(name = "PropertyApplications")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "PropertyApplicationID")
    private UUID propertyApplicationID;

    @ManyToOne
    @JoinColumn(name = "userID") // This is the foreign key column in PropertyApplications table
    private User user;

    @NotBlank(message = "Phone number cannot be blank.")
    @Column(name = "PhoneNumber", nullable = false)
    private String phoneNumber;

    @NotBlank(message = "Property address cannot be blank.")
    @Column(name = "PropertyAddress", nullable = false)
    private String propertyAddress;

    @NotBlank(message = "ZIP code cannot be blank.")
    @Column(name = "ZIPCode", nullable = false)
    private String zipCode;
//
    @NotNull(message = "Monthly rent cannot be null.")
    @DecimalMin(value = "0.00", inclusive = false, message = "Monthly rent must be greater than 0.")
    @Column(name = "MonthlyRent", nullable = false)
    private Double monthlyRent;

    @NotNull(message = "Available move-in date cannot be null.")
    @Column(name = "AvailableMoveInDate", nullable = false)
    private Date availableMoveInDate;;

    @NotNull(message = "Property Description cannot be null.")
    @Column(name = "PropertyDescription", columnDefinition = "TEXT")
    private String propertyDescription;
//
//    @Column(name = "SpecialRequirements", columnDefinition = "TEXT")
//    private String specialRequirements;
//
//    @NotNull(message = "Communication consent cannot be null.")
//    @Column(name = "CommunicationConsent", nullable = false)
//    private Boolean communicationConsent;
//
//    @NotNull(message = "Email contact cannot be null.")
//    @Column(name = "EmailContact", nullable = false)
//    private Boolean emailContact;
//
//    @NotNull(message = "Phone contact cannot be null.")
//    @Column(name = "PhoneContact", nullable = false)
//    private Boolean phoneContact;
//
//    @NotNull(message = "Consent given cannot be null.")
//    @Column(name = "ConsentGiven", nullable = false)
//    private Boolean consentGiven;

    @NotBlank(message = "Application status cannot be blank.")
    @Column(name = "ApplicationStatus", nullable = false)
    @Enumerated(EnumType.STRING)
    private ApplicationStatus applicationStatus;

    @NotNull(message = "Creation date cannot be null.")
    @Column(name = "CreationDate", nullable = false)
    private Date creationDate;
    @NotBlank(message = "License number cannot be blank.")
    @Column(name = "LicenseNumber", nullable = false)
    private String licenseNumber;

    @OneToMany(mappedBy = "property")
    private List<PropertyImages> propertyImages;

    @Override
    public String toString(){
        return "";
    }
}

