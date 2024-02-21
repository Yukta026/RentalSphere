import com.rentalsphere.backend.PropertyApplication.Model.PropertyApplication;
import com.rentalsphere.backend.PropertyApplication.Service.PropertyApplicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/property-applications")
public class PropertyApplicationController {
    private final PropertyApplicationService propertyApplicationService;

    @PostMapping(path = "/register")
    public ResponseEntity<PropertyApplication> createPropertyApplication(@Valid @RequestBody PropertyApplicationRequest request) {
        PropertyApplication propertyApplication = propertyApplicationService.savePropertyApplication(request);
        return new ResponseEntity<>(propertyApplication, HttpStatus.CREATED);
    }
}
