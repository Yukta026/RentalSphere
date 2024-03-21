package com.rentalsphere.backend.RequestResponse.Property;

import com.rentalsphere.backend.DTOs.TenantApplyDTO;
import com.rentalsphere.backend.RequestResponse.BasicResponse.BasicResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetTenantApplicationById extends BasicResponse {
    private List<TenantApplyDTO> tenant;

}
