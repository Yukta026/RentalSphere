package com.rentalsphere.backend.Property.Service.IService;

import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.RequestResponse.Property.GetAllPropertyResponse;
import com.rentalsphere.backend.RequestResponse.Property.GetPropertyResponse;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterResponse;
import com.rentalsphere.backend.RequestResponse.Tenant.TenantResponse;
import jakarta.validation.Valid;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

public interface IPropertyService {

    public PropertyRegisterResponse savePropertyApplication(PropertyRegisterRequest property)throws IOException, ParseException;

    public GetAllPropertyResponse getAllPropertyApplications();

    public Optional<Property> getPropertyApplicationById(Long id);

    public TenantResponse acceptTenantRequest(String email);
    public TenantResponse rejectTenantRequest(String email);
}
