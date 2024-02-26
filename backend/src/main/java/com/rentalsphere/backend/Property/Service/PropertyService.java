package com.rentalsphere.backend.Property.Service;

import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import com.rentalsphere.backend.Property.Service.IService.IPropertyService;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PropertyService implements IPropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Override
    public Property savePropertyApplication(PropertyRegisterRequest propertyrequest) {

        Property property = Property.builder()
                //.companyName(propertyrequest.getCompanyName())
                //.emailAddress(propertyrequest.getEmailAddress())
                //.countryCode(propertyrequest.getCountryCode())
                .phoneNumber(propertyrequest.getPhoneNumber())
                //.propertyType(propertyrequest.getPropertyType())
                .propertyAddress(propertyrequest.getPropertyAddress())
                //.city(propertyrequest.getCity())
                //.state(propertyrequest.getState())
                .zipCode(propertyrequest.getZipCode())
                .monthlyRent(propertyrequest.getMonthlyRent())
                //.leaseTerms(propertyrequest.getLeaseTerms())
                .availableMoveInDate(propertyrequest.getAvailableMoveInDate())
                //.numBedrooms(propertyrequest.getNumBedrooms())
                //.numBathrooms(propertyrequest.getNumBathrooms())
                //.amenities(propertyrequest.getAmenities())
                .propertyDescription(propertyrequest.getPropertyDescription())
              //  .specialRequirements(propertyrequest.getSpecialRequirements())
                //.communicationConsent(propertyrequest.getCommunicationConsent())
//                .emailContact(propertyrequest.getEmailContact())
//                .phoneContact(propertyrequest.getPhoneContact())
//                .consentGiven(propertyrequest.getConsentGiven())
                .applicationStatus(propertyrequest.getApplicationStatus())
                .creationDate(propertyrequest.getCreationDate())
                .build();
        return propertyRepository.save(property);
    }

    @Override
    public List<Property> getAllPropertyApplications() {
        return propertyRepository.findAll();
    }

    @Override
    public Optional<Property> getPropertyApplicationById(Long id) {
        return propertyRepository.findById(id);
    }
}
