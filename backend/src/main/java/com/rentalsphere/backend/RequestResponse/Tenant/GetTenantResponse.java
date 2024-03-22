package com.rentalsphere.backend.RequestResponse.Tenant;

import com.rentalsphere.backend.DTOs.TenantDTO;
import com.rentalsphere.backend.RequestResponse.BasicResponse.BasicResponse;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter
public class GetTenantResponse extends BasicResponse {
    private TenantDTO tenant;
}
