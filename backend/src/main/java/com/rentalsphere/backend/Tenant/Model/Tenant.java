package com.rentalsphere.backend.Tenant.Model;

import com.rentalsphere.backend.User.Model.User;
import jakarta.persistence.*;
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
@Entity(name = "TenantApplications")
@Table(name = "TenantApplications")
public class Tenant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TenantID")
    private Long tenantID;

    @ManyToOne
    @JoinColumn(name = "userID") // This is the foreign key column in TenantApplications table
    private User user;

    @NotBlank(message = "EmailAddress cannot be blank.")
    @Email(message = "Valid email address required.")
    @Column(name = "EmailAddress", nullable = false)
    private String emailAddress;

    @NotBlank(message = "CountryCode cannot be blank.")
    @Column(name = "CountryCode", nullable = false)
    private String countryCode;

    @NotBlank(message = "PhoneNumber cannot be blank.")
    @Column(name = "PhoneNumber", nullable = false)
    private String phoneNumber;

    @NotNull(message = "DateOfBirth cannot be blank.")
    @Column(name = "DateOfBirth", nullable = false)
    private Date dateOfBirth;

    @NotBlank(message = "SocialSecurityNumber cannot be blank.")
    @Column(name = "SocialSecurityNumber", nullable = false)
    private String socialSecurityNumber;

    @NotBlank(message = "StreetAddress cannot be blank.")
    @Column(name = "StreetAddress", nullable = false)
    private String streetAddress;

    @NotBlank(message = "City cannot be blank.")
    @Column(name = "City", nullable = false)
    private String city;

    @NotBlank(message = "State cannot be blank.")
    @Column(name = "State", nullable = false)
    private String state;

    @NotBlank(message = "ZIPCode cannot be blank.")
    @Column(name = "ZIPCode", nullable = false)
    private String zipCode;

    @NotBlank(message = "PropertyListingID cannot be blank.")
    @Column(name = "PropertyListingID", nullable = false)
    private String propertyListingID;

    @NotNull(message = "DesiredMoveInDate cannot be blank.")
    @Column(name = "DesiredMoveInDate", nullable = false)
    private Date desiredMoveInDate;

    @NotNull(message = "LeaseTermMonths cannot be blank.")
    @Positive(message = "LeaseTermMonths must be a positive number.")
    @Column(name = "LeaseTermMonths", nullable = false)
    private Integer leaseTermMonths;

    @NotNull(message = "MonthlyBudget cannot be blank.")
    @Positive(message = "MonthlyBudget must be a positive number.")
    @Column(name = "MonthlyBudget", nullable = false)
    private Double monthlyBudget;


    @NotNull(message = "NumOccupants cannot be blank.")
    @Positive(message = "NumOccupants must be a positive number.")
    @Column(name = "NumOccupants", nullable = false)
    private Integer numOccupants;

    @NotBlank(message = "CurrentEmployer cannot be blank.")
    @Column(name = "CurrentEmployer", nullable = false)
    private String currentEmployer;

    @NotBlank(message = "PositionTitle cannot be blank.")
    @Column(name = "PositionTitle", nullable = false)
    private String positionTitle;

    @NotNull(message = "MonthlyIncome cannot be blank.")
    @Positive(message = "MonthlyIncome must be a positive number.")
    @Column(name = "MonthlyIncome", nullable = false)
    private Double monthlyIncome;

    @NotBlank(message = "SupervisorName cannot be blank.")
    @Column(name = "SupervisorName", nullable = false)
    private String supervisorName;

    @NotBlank(message = "SupervisorPhoneNumber cannot be blank.")
    @Column(name = "SupervisorPhoneNumber", nullable = false)
    private String supervisorPhoneNumber;

    @NotNull(message = "LengthOfEmployment cannot be blank.")
    @Positive(message = "LengthOfEmployment must be a positive number.")
    @Column(name = "LengthOfEmployment", nullable = false)
    private Integer lengthOfEmployment;

    @Column(name = "EmergencyContactFullName")
    private String emergencyContactFullName;

    @Column(name = "Relationship")
    private String relationship;

    @Column(name = "EmergencyContactPhoneNumber")
    private String emergencyContactPhoneNumber;

    @NotNull(message = "EmailContact cannot be blank.")
    @Column(name = "EmailContact", nullable = false)
    private Boolean emailContact;

    @NotNull(message = "PhoneContact cannot be blank.")
    @Column(name = "PhoneContact", nullable = false)
    private Boolean phoneContact;

    @NotNull(message = "ConsentGiven cannot be blank.")
    @Column(name = "ConsentGiven", nullable = false)
    private Boolean consentGiven;

    @NotBlank(message = "ApplicationStatus cannot be blank.")
    @Column(name = "ApplicationStatus", nullable = false)
    private String applicationStatus;

    @NotNull(message = "CreationDate cannot be blank.")
    @Column(name = "CreationDate", nullable = false)
    private Date creationDate;

    // getters and setters
}
