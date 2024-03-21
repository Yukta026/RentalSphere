package com.rentalsphere.backend.DTOs;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class TenantApplyDTO {
    private Long tenantID;
    private String emailAddress;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    @JsonFormat(pattern = "yyyy/mm/dd")
    private Date dateOfBirth;
    private String socialSecurityNumber;
    private String streetAddress;
    @JsonFormat(pattern = "yyyy/mm/dd")
    private Date desiredMoveInDate;
    private Integer leaseTermMonths;
    private Integer numOccupants;
    private String currentEmployer;
    private Integer lengthOfEmployment;
    @JsonFormat(pattern = "yyyy/mm/dd")
    private Date creationDate;
    private Long propertyApplicationID;
}
