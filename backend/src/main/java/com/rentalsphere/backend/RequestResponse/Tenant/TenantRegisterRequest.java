package com.rentalsphere.backend.RequestResponse.Tenant;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TenantRegisterRequest {

    @NotBlank(message = "EmailAddress cannot be blank.")
    @Email(message = "Valid email address required.")
    private String emailAddress;

    @NotBlank(message = "CountryCode cannot be blank.")
    private String countryCode;

    @NotBlank(message = "PhoneNumber cannot be blank.")
    private String phoneNumber;

    @NotNull(message = "DateOfBirth cannot be blank.")
    private Date dateOfBirth;

    @NotBlank(message = "SocialSecurityNumber cannot be blank.")
    private String socialSecurityNumber;

    @NotBlank(message = "StreetAddress cannot be blank.")
    private String streetAddress;

    @NotBlank(message = "City cannot be blank.")
    private String city;

    @NotBlank(message = "State cannot be blank.")
    private String state;

    @NotBlank(message = "ZIPCode cannot be blank.")
    private String zipCode;

    @NotBlank(message = "PropertyListingID cannot be blank.")
    private String propertyListingID;

    @NotNull(message = "DesiredMoveInDate cannot be blank.")
    private Date desiredMoveInDate;

    @NotNull(message = "LeaseTermMonths cannot be blank.")
    @Positive(message = "LeaseTermMonths must be a positive number.")
    private Integer leaseTermMonths;

    @NotNull(message = "MonthlyBudget cannot be blank.")
    @Positive(message = "MonthlyBudget must be a positive number.")
    private Double monthlyBudget;


    @NotNull(message = "NumOccupants cannot be blank.")
    @Positive(message = "NumOccupants must be a positive number.")
    private Integer numOccupants;

    @NotBlank(message = "CurrentEmployer cannot be blank.")
    private String currentEmployer;

    @NotBlank(message = "PositionTitle cannot be blank.")
    private String positionTitle;

    @NotNull(message = "MonthlyIncome cannot be blank.")
    @Positive(message = "MonthlyIncome must be a positive number.")
    private Double monthlyIncome;

    @NotBlank(message = "SupervisorName cannot be blank.")
    private String supervisorName;

    @NotBlank(message = "SupervisorPhoneNumber cannot be blank.")
    private String supervisorPhoneNumber;

    @NotNull(message = "LengthOfEmployment cannot be blank.")
    @Positive(message = "LengthOfEmployment must be a positive number.")
    private Integer lengthOfEmployment;

    private String emergencyContactFullName;

    private String relationship;

    private String emergencyContactPhoneNumber;

    @NotNull(message = "EmailContact cannot be blank.")
    private Boolean emailContact;

    @NotNull(message = "PhoneContact cannot be blank.")
    private Boolean phoneContact;

    @NotNull(message = "ConsentGiven cannot be blank.")
    private Boolean consentGiven;

    @NotBlank(message = "ApplicationStatus cannot be blank.")
    private String applicationStatus;

    @NotNull(message = "CreationDate cannot be blank.")
    private Date creationDate;

}
