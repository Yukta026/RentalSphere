package com.rentalsphere.backend.Mappers;

import com.rentalsphere.backend.DTOs.PropertyDTO;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Utils.PropertyImages.Model.PropertyImages;

import java.util.ArrayList;
import java.util.List;

public class PropertyMapper {
    public static PropertyDTO convertToProperty(Property property){
        List<String> propertyImagesList = new ArrayList<>();
        for(PropertyImages image: property.getPropertyImages()){
            propertyImagesList.add(image.getImageUrl());
        }
        return new PropertyDTO(
                property.getPropertyApplicationID(),
                property.getEmailAddress(),
                property.getPhoneNumber(),
                property.getPropertyAddress(),
                property.getCity(),
                property.getState(),
                property.getZipCode(),
                property.getMonthlyRent(),
                property.getAvailableMoveInDate(),
                property.getNumBedrooms(),
                property.getNumBathrooms(),
                property.getPropertyDescription(),
                propertyImagesList
        );
    }
}
