package com.rentalsphere.backend.Property.Controller;

import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Service.PropertyService;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.text.ParseException;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/property")
public class PropertyController {
    private final PropertyService propertyService;

    @PostMapping(path = "/register", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<PropertyRegisterResponse> createPropertyApplication(@Valid @ModelAttribute PropertyRegisterRequest request) throws IOException, ParseException {
        return new ResponseEntity<>(propertyService.savePropertyApplication(request), HttpStatus.CREATED);
    }
}
