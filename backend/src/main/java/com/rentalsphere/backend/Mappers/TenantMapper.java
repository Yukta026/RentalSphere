package com.rentalsphere.backend.Mappers;

import com.rentalsphere.backend.DTOs.LeaseDTO;
import com.rentalsphere.backend.DTOs.TenantApplyDTO;
import com.rentalsphere.backend.Lease.Model.Lease;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.User.Model.User;

import java.util.ArrayList;
import java.util.List;

public class TenantMapper {

    public static TenantApplyDTO convertToTenantDTO(Tenant tenant){
        return new TenantApplyDTO(
                tenant.getTenantID(),
                tenant.getUser().getFirstName(),
                tenant.getUser().getLastName(),
                tenant.getUser().getEmail(),
                tenant.getPhoneNumber(),
                tenant.getDateOfBirth(),
                tenant.getSocialSecurityNumber(),
                tenant.getStreetAddress(),
                tenant.getDesiredMoveInDate(),
                tenant.getLeaseTermMonths(),
                tenant.getNumOccupants(),
                tenant.getCurrentEmployer(),
                tenant.getLengthOfEmployment(),
                tenant.getCreationDate(),
                tenant.getProperty().getPropertyApplicationID()
        );
    }

    public static List<TenantApplyDTO> convertToTenantListDTO(List<Tenant> tenantList){
        List<TenantApplyDTO> tenantDTOS = new ArrayList<>();
        for (Tenant tenant: tenantList){
            tenantDTOS.add(convertToTenantDTO(tenant));
        }
        return tenantDTOS;
    }

//    public static List<TenantApplyDTO> convertTenantDTO(Tenant tenantlist){
//        List<TenantApplyDTO> tenantApplyDTOS = new ArrayList<>();
//        tenantlist.forEach(tenant -> {
//            tenantApplyDTOS.add(
//                    new TenantApplyDTO(
//                            tenant.getTenantID(),
//                            tenant.getEmailAddress(),
//                            tenant.getPhoneNumber(),
//                            tenant.getDateOfBirth(),
//                            tenant.getSocialSecurityNumber(),
//                            tenant.getStreetAddress(),
//                            tenant.getDesiredMoveInDate(),
//                            tenant.getLeaseTermMonths(),
//                            tenant.getNumOccupants(),
//                            tenant.getCurrentEmployer(),
//                            tenant.getLengthOfEmployment(),
//                            tenant.getCreationDate(),
//                            tenant.getProperty().getPropertyApplicationID()
//                    )
//            );
//        });
//        return tenantApplyDTOS;
//    }
}
