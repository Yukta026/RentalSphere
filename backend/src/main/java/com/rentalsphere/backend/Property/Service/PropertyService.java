package com.rentalsphere.backend.Property.Service;

import com.rentalsphere.backend.Enums.ApplicationStatus;
import com.rentalsphere.backend.Exception.User.UserNotFoundException;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import com.rentalsphere.backend.Property.Service.IService.IPropertyService;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterResponse;
import com.rentalsphere.backend.Services.Cloudinary.CloudinaryService;
import com.rentalsphere.backend.User.Model.User;
import com.rentalsphere.backend.User.Repository.UserRepository;
import com.rentalsphere.backend.Utils.PropertyImages.Model.PropertyImages;
import com.rentalsphere.backend.Utils.PropertyImages.Repository.PropertyImagesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@Service
@RequiredArgsConstructor
public class PropertyService implements IPropertyService {

    @Autowired
    private final PropertyRepository propertyRepository;
    private final UserRepository userRepository;
    private final CloudinaryService cloudinaryService;
    private final PropertyImagesRepository propertyImagesRepository;

    @Override
    public PropertyRegisterResponse savePropertyApplication(PropertyRegisterRequest propertyrequest) throws IOException, ParseException{
        Optional<User> user = userRepository.findByEmail(propertyrequest.getEmail());

        if(user.isEmpty()){
            throw new UserNotFoundException("User does not exists.");
        }

//        Property property = Property.builder()
//                .companyName(propertyrequest.getCompanyName())
//                .emailAddress(propertyrequest.getEmailAddress())
//                .propertyManager(user.get())
//                .countryCode(propertyrequest.getCountryCode())
//                .phoneNumber(propertyrequest.getPhoneNumber())
//                .propertyType(propertyrequest.getPropertyType())
//                .propertyAddress(propertyrequest.getPropertyAddress())
//                .city(propertyrequest.getCity())
//                .state(propertyrequest.getState())
//                .zipCode(propertyrequest.getZipCode())
//                .monthlyRent(propertyrequest.getMonthlyRent())
//                .leaseTerms(propertyrequest.getLeaseTerms())
//                .availableMoveInDate(propertyrequest.getAvailableMoveInDate())
//                .numBedrooms(propertyrequest.getNumBedrooms())
//                .numBathrooms(propertyrequest.getNumBathrooms())
//                .amenities(propertyrequest.getAmenities())
//                .propertyDescription(propertyrequest.getPropertyDescription())
//                .specialRequirements(propertyrequest.getSpecialRequirements())
//                .communicationConsent(propertyrequest.getCommunicationConsent())
//                .emailContact(propertyrequest.getEmailContact())
//                .phoneContact(propertyrequest.getPhoneContact())
//                .consentGiven(propertyrequest.getConsentGiven())
//                .applicationStatus(ApplicationStatus.PENDING)
//                .creationDate(propertyrequest.getCreationDate())
//                .build();


//        Map uploadedImage = cloudinaryService.upload(propertyrequest.getImage());
        Property property = Property.builder()
                .propertyManager(user.get())
                .emailAddress(user.get().getEmail())
                .propertyDescription(propertyrequest.getPropertyDescription())
                .city(propertyrequest.getCity())
                .state(propertyrequest.getState())
                .monthlyRent(propertyrequest.getMonthlyRent())
                .availableMoveInDate(new SimpleDateFormat("yyyy-mm-dd").parse(propertyrequest.getAvailableMoveInDate()))
                .numBedrooms(propertyrequest.getNumBedrooms())
                .numBathrooms(propertyrequest.getNumBathrooms())
                .phoneNumber(propertyrequest.getPhoneNumber())
                .propertyAddress(propertyrequest.getPropertyAddress())
                .zipCode(propertyrequest.getZipCode())
                .licenseNumber(propertyrequest.getLicenseNumber())
                .creationDate(new Date())
                .applicationStatus(ApplicationStatus.PENDING)
                .build();
        property = propertyRepository.save(property);

        List<PropertyImages> uploadedImages = new ArrayList<>();
        for(MultipartFile image: propertyrequest.getImages()){
            uploadedImages.add(PropertyImages.builder().property(property).imageUrl((String) cloudinaryService.upload(image).get("url")).build());
        }
        propertyImagesRepository.saveAll(uploadedImages);

        return PropertyRegisterResponse.builder()
                .isSuccess(true)
                .message("Request made to the Admin")
                .timeStamp(new Date())
                .build();
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
