package com.rentalsphere.backend.RequestResponse.Property;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PropertyRegisterRequest {

    private String companyName;

    @NotBlank(message = "Email address cannot be blank.")
    @Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Valid email required.")
    private String emailAddress;

    @NotBlank(message = "Country Code cannot be blank.")
    private String countryCode;

    @NotBlank(message = "Phone number cannot be blank.")
    private String phoneNumber;

    @NotBlank(message = "Property type cannot be blank.")
    private String propertyType;

    @NotBlank(message = "Property address cannot be blank.")
    private String propertyAddress;

    @NotBlank(message = "City cannot be blank.")
    private String city;

    @NotBlank(message = "State cannot be blank.")
    private String state;

    @NotBlank(message = "ZIP code cannot be blank.")
    private String zipCode;

    @NotNull(message = "Monthly rent cannot be null.")
    @DecimalMin(value = "0.00", inclusive = false, message = "Monthly rent must be greater than 0.")
    private Double monthlyRent;

    @NotBlank(message = "Lease terms cannot be blank.")
    private String leaseTerms;

    @NotNull(message = "Available move-in date cannot be null.")
    private Date availableMoveInDate;

    @NotNull(message = "Number of bedrooms cannot be null.")
    @Min(value = 1, message = "Number of bedrooms must be at least 1.")
    private Integer numBedrooms;

    @NotNull(message = "Number of bathrooms cannot be null.")
    @Min(value = 1, message = "Number of bathrooms must be at least 1.")
    private Integer numBathrooms;

    private String amenities;

    private String propertyDescription;

    private String specialRequirements;

    @NotNull(message = "Communication consent cannot be null.")
    private Boolean communicationConsent;

    @NotNull(message = "Email contact cannot be null.")
    private Boolean emailContact;

    @NotNull(message = "Phone contact cannot be null.")
    private Boolean phoneContact;

    @NotNull(message = "Consent given cannot be null.")
    private Boolean consentGiven;

    @NotBlank(message = "Application status cannot be blank.")
    private String applicationStatus;

    @NotNull(message = "Creation date cannot be null.")
    private Date creationDate;
}