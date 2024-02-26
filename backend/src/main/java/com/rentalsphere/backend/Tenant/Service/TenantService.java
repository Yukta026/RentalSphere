package com.rentalsphere.backend.Tenant.Service;

import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import com.rentalsphere.backend.RequestResponse.Tenant.TenantRegisterRequest;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.Tenant.Repository.TenantRepository;
import com.rentalsphere.backend.Tenant.Service.IService.ITenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TenantService implements ITenantService {

    @Autowired
    private TenantRepository tenantRepository;

    @Override
    public Tenant saveTenantApplication(TenantRegisterRequest tenantRequest) {

        // Assuming there is a mapper method to convert TenantRegisterRequest to Tenant entity
        Tenant tenant = Tenant.builder()
                .emailAddress(tenantRequest.getEmailAddress())
                .countryCode(tenantRequest.getCountryCode())
                .phoneNumber(tenantRequest.getPhoneNumber())
                .dateOfBirth(tenantRequest.getDateOfBirth())
                .socialSecurityNumber(tenantRequest.getSocialSecurityNumber())
                .streetAddress(tenantRequest.getStreetAddress())
                .city(tenantRequest.getCity())
                .state(tenantRequest.getState())
                .zipCode(tenantRequest.getZipCode())
                .propertyListingID(tenantRequest.getPropertyListingID())
                .desiredMoveInDate(tenantRequest.getDesiredMoveInDate())
                .leaseTermMonths(tenantRequest.getLeaseTermMonths())
                .monthlyBudget(tenantRequest.getMonthlyBudget())
                .numOccupants(tenantRequest.getNumOccupants())
                .currentEmployer(tenantRequest.getCurrentEmployer())
                .positionTitle(tenantRequest.getPositionTitle())
                .monthlyIncome(tenantRequest.getMonthlyIncome())
                .supervisorName(tenantRequest.getSupervisorName())
                .supervisorPhoneNumber(tenantRequest.getSupervisorPhoneNumber())
                .lengthOfEmployment(tenantRequest.getLengthOfEmployment())
                .emergencyContactFullName(tenantRequest.getEmergencyContactFullName())
                .relationship(tenantRequest.getRelationship())
                .emergencyContactPhoneNumber(tenantRequest.getEmergencyContactPhoneNumber())
                .emailContact(tenantRequest.getEmailContact())
                .phoneContact(tenantRequest.getPhoneContact())
                .consentGiven(tenantRequest.getConsentGiven())
                .applicationStatus(tenantRequest.getApplicationStatus())
                .creationDate(tenantRequest.getCreationDate())
                .build();;
        return tenantRepository.save(tenant);
    }

    @Override
    public List<Tenant> getAllTenantApplications() {
        return tenantRepository.findAll();
    }

    @Override
    public Optional<Tenant> getTenantApplicationById(Long id) {
        return tenantRepository.findById(id);
    }

}
