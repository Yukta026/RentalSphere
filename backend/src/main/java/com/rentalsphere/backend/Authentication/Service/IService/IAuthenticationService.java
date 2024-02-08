package com.rentalsphere.backend.Authentication.Service.IService;

import com.rentalsphere.backend.RequestResponse.Authentication.AuthenticationRequest;
import com.rentalsphere.backend.RequestResponse.Authentication.AuthenticationResponse;

public interface IAuthenticationService {
    public AuthenticationResponse register(AuthenticationRequest request);
}
