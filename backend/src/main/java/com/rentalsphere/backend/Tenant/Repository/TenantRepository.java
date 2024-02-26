package com.rentalsphere.backend.Tenant.Repository;

import com.rentalsphere.backend.Tenant.Model.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TenantRepository extends JpaRepository<Tenant, Long> {

    // Custom query method to find tenants by propertyListingID
    List<Tenant> findByPropertyListingID(String propertyListingID);
}
