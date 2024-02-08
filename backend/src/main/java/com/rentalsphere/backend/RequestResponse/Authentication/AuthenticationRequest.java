package com.rentalsphere.backend.RequestResponse.Authentication;

import com.rentalsphere.backend.Enums.Roles;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {
    @NotBlank(message = "First name cannot be blank.")
    private String firstName;
    @NotBlank(message = "Last name cannot be blank.")
    private String lastName;
    @NotBlank(message = "Email cannot be blank.")
    private String email;
    @NotBlank(message = "Password cannot be blank.")
    private String password;
}
