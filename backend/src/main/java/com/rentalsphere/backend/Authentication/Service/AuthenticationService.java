package com.rentalsphere.backend.Authentication.Service;

import com.rentalsphere.backend.Authentication.Service.IService.IAuthenticationService;
import com.rentalsphere.backend.Configuration.JwtService;
import com.rentalsphere.backend.Enums.Roles;
import com.rentalsphere.backend.RequestResponse.Authentication.AuthenticationRequest;
import com.rentalsphere.backend.RequestResponse.Authentication.AuthenticationResponse;
import com.rentalsphere.backend.User.Model.User;
import com.rentalsphere.backend.User.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthenticationResponse register(AuthenticationRequest request) {
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Roles.USER)
                .build();
        userRepository.save(user);
        String token = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .email(user.getEmail())
                .token(token)
                .build();
    }
}
