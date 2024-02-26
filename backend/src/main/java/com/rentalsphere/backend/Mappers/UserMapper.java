package com.rentalsphere.backend.Mappers;

import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.User.Model.User;
import com.rentalsphere.backend.DTOs.PropertyManagerDTO;
import com.rentalsphere.backend.Utils.PropertyImages.Model.PropertyImages;

import java.util.ArrayList;
import java.util.List;

public class UserMapper {
    public static PropertyManagerDTO convertToPropertyManagerDTO(User user, Property property){
        List<String> imageUrls = new ArrayList<>();
        for(PropertyImages image: property.getPropertyImages()){
            imageUrls.add(image.getImageUrl());
        }
        return new PropertyManagerDTO(
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                property.getPhoneNumber(),
                imageUrls
        );
    }
}
