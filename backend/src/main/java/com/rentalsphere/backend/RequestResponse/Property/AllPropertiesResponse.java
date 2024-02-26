package com.rentalsphere.backend.RequestResponse.Property;

import com.rentalsphere.backend.DTOs.PropertyDTO;
import com.rentalsphere.backend.RequestResponse.BasicResponse.BasicResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AllPropertiesResponse extends BasicResponse {
    private List<PropertyDTO> properties;
}
