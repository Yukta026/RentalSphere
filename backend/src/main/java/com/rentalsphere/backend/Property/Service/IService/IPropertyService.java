package com.rentalsphere.backend.Property.Service.IService;

import com.rentalsphere.backend.RequestResponse.Property.*;
import com.rentalsphere.backend.RequestResponse.Tenant.TenantResponse;

import java.io.IOException;
import java.text.ParseException;;

public interface IPropertyService {

    public PropertyRegisterResponse savePropertyApplication(PropertyRegisterRequest property)throws IOException, ParseException;

    public GetAllPropertyResponse getAllPropertyApplications();

    public GetPropertyResponse getProperty(Long id);
    public TenantResponse acceptTenantRequest(String email);
    public TenantResponse rejectTenantRequest(String email);

    public GetTenantResponse getTenantApplicationById(Long id);
}
