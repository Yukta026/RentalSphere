package com.rentalsphere.backend.DTOs;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;

import java.util.Date;

@AllArgsConstructor
public class TenantDTO {
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    @JsonFormat(pattern = "MMMM dd, yyyy")
    private Date dateOfBirth;
    private String streetAddress;
    @JsonFormat(pattern = "MMMM dd, yyyy")
    private Date desiredMoveInDate;
    private Integer numOccupants;
    private String currentEmployer;
    @JsonFormat(pattern = "MMMM dd, yyyy")
    private Date requestDate;

}
