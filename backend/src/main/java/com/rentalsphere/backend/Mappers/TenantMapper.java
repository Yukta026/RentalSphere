package com.rentalsphere.backend.Mappers;

import com.rentalsphere.backend.DTOs.TenantDTO;
import com.rentalsphere.backend.Tenant.Model.Tenant;

import java.util.ArrayList;
import java.util.List;

public class TenantMapper {
    public static TenantDTO convertToTenantDTO(Tenant tenant){
        return new TenantDTO(
                tenant.getTenantID(),
                tenant.getUser().getFirstName() + " " + tenant.getUser().getLastName(),
                tenant.getEmailAddress(),
                tenant.getPhoneNumber(),
                tenant.getDateOfBirth(),
                tenant.getStreetAddress(),
                tenant.getDesiredMoveInDate(),
                tenant.getNumOccupants(),
                tenant.getCurrentEmployer(),
                tenant.getCreationDate()
        );
    }

    public static List<TenantDTO> convertToTenantDTOs(List<Tenant> tenants){
        List<TenantDTO> tenantDTOs = new ArrayList<>();

        for(Tenant tenant: tenants){
            tenantDTOs.add(convertToTenantDTO(tenant));
        }

        return tenantDTOs;
    }
}
