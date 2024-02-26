package com.rentalsphere.backend.Property.Service.IService;

import com.rentalsphere.backend.DTOs.PropertyDTO;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.RequestResponse.Property.AllPropertiesResponse;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterResponse;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

public interface IPropertyService {

    public PropertyRegisterResponse savePropertyApplication(PropertyRegisterRequest property)throws IOException, ParseException;

    public List<Property> getAllPropertyApplications();

    public Optional<Property> getPropertyApplicationById(Long id);
    public AllPropertiesResponse getAllProperties();
}
