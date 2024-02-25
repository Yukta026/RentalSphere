package com.rentalsphere.backend.Tenant.Service.IService;

import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.RequestResponse.Tenant.TenantRegisterRequest;
import java.util.List;
import java.util.Optional;

public interface ITenantService {

    public Tenant saveTenantApplication(TenantRegisterRequest tenantRequest);

    public List<Tenant> getAllTenantApplications();

    public Optional<Tenant> getTenantApplicationById(Long id);

}