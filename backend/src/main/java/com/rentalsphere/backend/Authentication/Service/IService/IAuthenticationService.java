package com.rentalsphere.backend.Authentication.Service.IService;

import com.rentalsphere.backend.RequestResponse.Authentication.AuthenticationResponse;
import com.rentalsphere.backend.RequestResponse.Authentication.RegisterRequest;

public interface IAuthenticationService {
    public AuthenticationResponse register(RegisterRequest request);
}