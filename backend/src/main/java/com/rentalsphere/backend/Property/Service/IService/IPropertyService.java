package com.rentalsphere.backend.Property.Service.IService;

import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

public interface IPropertyService {

    public Property savePropertyApplication(PropertyRegisterRequest property);
    public List<Property> getAllPropertyApplications();
    public Optional<Property> getPropertyApplicationById(Long id);
}
