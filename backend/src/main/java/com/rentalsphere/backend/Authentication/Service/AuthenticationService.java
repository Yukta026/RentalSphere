package com.rentalsphere.backend.Authentication.Service;

import com.rentalsphere.backend.Authentication.Service.IService.IAuthenticationService;
import com.rentalsphere.backend.Configuration.JwtService;
import com.rentalsphere.backend.Enums.Roles;
import com.rentalsphere.backend.Exception.User.UserAlreadyExistsException;
import com.rentalsphere.backend.RequestResponse.Authentication.AuthenticationResponse;
import com.rentalsphere.backend.RequestResponse.Authentication.RegisterRequest;
import com.rentalsphere.backend.Role.Repository.RoleRepository;
import com.rentalsphere.backend.User.Model.User;
import com.rentalsphere.backend.User.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthenticationResponse register(RegisterRequest request) {
        if(userRepository.findByEmail(request.getEmail()).isPresent()){
            throw new UserAlreadyExistsException("User with same email already exists");
        }
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(List.of(roleRepository.findByName(Roles.USER)))
                .build();
        userRepository.save(user);
        List<String> userRoles = user.getRoles().stream().map(role -> role.getName().name()).toList();
        String token = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .isSuccess(true)
                .email(user.getEmail())
                .token(token)
                .roles(userRoles)
                .timeStamp(new Date())
                .build();
    }
}
