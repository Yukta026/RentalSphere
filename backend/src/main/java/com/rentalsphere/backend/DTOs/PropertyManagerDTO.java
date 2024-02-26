package com.rentalsphere.backend.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PropertyManagerDTO {
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNubmber;
    private List<String> imageUrls;
}
