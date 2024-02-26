package com.rentalsphere.backend.RequestResponse.Property;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.Date;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PropertyRegisterRequest {
    @NotBlank(message = "email cannot be blank.")
    private String email;
    private List<MultipartFile> images;

    @NotBlank(message = "Phone number cannot be blank.")
    private String phoneNumber;

    @NotBlank(message = "Property address cannot be blank.")
    private String propertyAddress;

    @NotBlank(message = "ZIP code cannot be blank.")
    private String zipCode;
//
    @NotNull(message = "Monthly rent cannot be null.")
    @DecimalMin(value = "0.00", inclusive = false, message = "Monthly rent must be greater than 0.")
    private Double monthlyRent;

    @NotNull(message = "Available move-in date cannot be null.")
    private Date availableMoveInDate;

    @NotNull(message = "Property Description cannot be null.")
    private String propertyDescription;
//
//    private String specialRequirements;
//
//    @NotNull(message = "Communication consent cannot be null.")
//    private Boolean communicationConsent;
//
//    @NotNull(message = "Email contact cannot be null.")
//    private Boolean emailContact;
//
//    @NotNull(message = "Phone contact cannot be null.")
//    private Boolean phoneContact;

    @NotBlank(message = "Application status cannot be blank.")
    private String applicationStatus;

    @NotNull(message = "Creation date cannot be null.")
    private Date creationDate;
}
