package com.rentalsphere.backend.Property.Service;

import com.rentalsphere.backend.Enums.ApplicationStatus;
import com.rentalsphere.backend.Enums.Roles;
import com.rentalsphere.backend.Exception.Property.PropertyNotFoundException;
import com.rentalsphere.backend.Exception.User.UserNotFoundException;
import com.rentalsphere.backend.Mappers.PropertyMapper;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import com.rentalsphere.backend.Property.Service.IService.IPropertyService;
import com.rentalsphere.backend.RequestResponse.Property.GetAllPropertyResponse;
import com.rentalsphere.backend.RequestResponse.Property.GetPropertyResponse;
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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

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

        if(!user.isPresent()) {
            throw new UserNotFoundException("User does not exists.");
        }

        String message = "Request made to the Admin.";

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

        if(user.get().getRoles().stream().anyMatch(role -> role.getName().equals(Roles.PROPERTY_MANAGER))){
            property.setApplicationStatus(ApplicationStatus.APPROVED);
            message = "Property added.";
        }

        property = propertyRepository.save(property);

        List<PropertyImages> uploadedImages = new ArrayList<>();
        for(MultipartFile image: propertyrequest.getImages()){
            uploadedImages.add(PropertyImages.builder().property(property).imageUrl((String) cloudinaryService.upload(image).get("url")).build());
        }
        propertyImagesRepository.saveAll(uploadedImages);

        return PropertyRegisterResponse.builder()
                .isSuccess(true)
                .message(message)
                .timeStamp(new Date())
                .build();
    }

    @Override
    public GetAllPropertyResponse getAllPropertyApplications() {
        List<Property> properties = propertyRepository.findAllByApplicationStatus(ApplicationStatus.APPROVED);
        return GetAllPropertyResponse.builder()
                .isSuccess(true)
                .properties(PropertyMapper.convertToPropertiesDTO(properties))
                .timeStamp(new Date())
                .build();
    }

    @Override
    public GetPropertyResponse getProperty(Long id) {
        Optional<Property> property = propertyRepository.findById(id);
        if(property.isEmpty()){
            throw new PropertyNotFoundException("Property with this id does not exists.");
        }
        return GetPropertyResponse.builder()
                .isSuccess(true)
                .property(PropertyMapper.convertToPropertyDTO(property.get()))
                .timeStamp(new Date())
                .build();
    }
}
