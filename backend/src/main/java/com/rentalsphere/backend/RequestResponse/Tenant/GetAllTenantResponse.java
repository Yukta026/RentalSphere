package com.rentalsphere.backend.RequestResponse.Tenant;

import com.rentalsphere.backend.DTOs.TenantDTO;
import com.rentalsphere.backend.RequestResponse.BasicResponse.BasicResponse;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

import java.util.List;

@SuperBuilder
@Getter
public class GetAllTenantResponse extends BasicResponse {
    private List<TenantDTO> tenants;
}
