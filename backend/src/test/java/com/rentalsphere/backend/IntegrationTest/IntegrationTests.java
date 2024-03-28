package com.rentalsphere.backend.IntegrationTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentalsphere.backend.Authentication.Controller.AuthenticationController;
import com.rentalsphere.backend.Authentication.Service.IService.IAuthenticationService;
import com.rentalsphere.backend.Enums.Roles;
import com.rentalsphere.backend.RequestResponse.Authentication.AuthenticationResponse;
import com.rentalsphere.backend.RequestResponse.Authentication.LoginRequest;
import com.rentalsphere.backend.ViolationLog.Controller.ViolationLogController;
import com.rentalsphere.backend.ViolationLog.Model.ViolationLog;
import com.rentalsphere.backend.ViolationLog.Service.IService.IViolationLogService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;

import java.util.*;

import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.post;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(excludeAutoConfiguration = SecurityAutoConfiguration.class)
@ContextConfiguration(classes = {AuthenticationController.class, IAuthenticationService.class, ViolationLogController.class, IViolationLogService.class})
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")

public class IntegrationTests {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private IAuthenticationService authService;
    @MockBean
    private IViolationLogService violationLogService;
    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void init(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testLogin() throws Exception {
        // Mocking the login request and response
        LoginRequest request = new LoginRequest("email", "password");
        AuthenticationResponse response = AuthenticationResponse.builder()
                .isSuccess(true)
                .email("email")
                .token("token")
                .roles(List.of(Roles.USER.name()))
                .timeStamp(new Date())
                .build();

        // Mocking the service method
        Mockito.when(authService.login(request)).thenReturn(response);

        // Perform the POST request and validate the response
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();
    }

    @Test
    void testGetAllViolationLogs() throws Exception {
        ViolationLog violationLog = new ViolationLog();
        violationLog.setId(1L);
        violationLog.setTitle("violation");
        violationLog.setIntensity("high");
        violationLog.setDescription("description");
        violationLog.setMonetaryDamage(25.00);
        violationLog.setDate(new Date());
        violationLog.setPersonalComments("comments");

        String token = "token";

        Mockito.when(violationLogService.getAllViolationLogs()).thenReturn(List.of(violationLog));

        MvcResult result = mockMvc.perform(get("/api/v1/violationlog/")
                        .header(HttpHeaders.AUTHORIZATION, "Bearer " + token))
                .andDo(print())
                .andExpect(status().isOk())
                .andReturn();

        String responseBody = result.getResponse().getContentAsString();
        assertNotNull(responseBody);
    }
}
