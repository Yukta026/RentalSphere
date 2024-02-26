package com.rentalsphere.backend.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
public class PropertyDTO {
    private Long propertyApplicationID;
    private String emailAddress;
    private String phoneNumber;
    private String propertyAddress;
    private String city;
    private String state;
    private String zipCode;
    private Double monthlyRent;
    private Date availableMoveInDate;
    private Integer numBedrooms;
    private Integer numBathrooms;
    private String propertyDescription;
    private List<String> propertyImages;
}
