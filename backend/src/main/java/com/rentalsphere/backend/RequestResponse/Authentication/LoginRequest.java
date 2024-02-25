package com.rentalsphere.backend.RequestResponse.Authentication;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {
    @NotBlank(message = "Email cannot be blank!")
    private String email;
    @NotBlank(message = "Password cannot be blank!")
    private String password;

}