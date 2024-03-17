package com.rentalsphere.backend.Marketplace.Service;

import com.rentalsphere.backend.Enums.ApplicationStatus;
import com.rentalsphere.backend.Enums.AvailabilityStatus;
import com.rentalsphere.backend.Exception.Tenant.TenantNotFoundException;
import com.rentalsphere.backend.Exception.User.UserNotFoundException;
import com.rentalsphere.backend.Marketplace.Model.Post;
import com.rentalsphere.backend.Marketplace.Repository.PostRepository;
import com.rentalsphere.backend.Marketplace.Service.IService.IPostService;
import com.rentalsphere.backend.RequestResponse.Post.CreatePostRequest;
import com.rentalsphere.backend.RequestResponse.Post.PostResponse;
import com.rentalsphere.backend.RequestResponse.Post.UpdatePostRequest;
import com.rentalsphere.backend.Services.Cloudinary.IService.ICloudinaryService;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.Tenant.Repository.TenantRepository;
import com.rentalsphere.backend.User.Model.User;
import com.rentalsphere.backend.User.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService implements IPostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final TenantRepository tenantRepository;
    private final ICloudinaryService cloudinaryService;

    @Override
    public PostResponse createPost(CreatePostRequest request) throws IOException {
        Optional<Tenant> tenant = tenantRepository.findByEmailAddressAndApplicationStatus(request.getEmail(), ApplicationStatus.APPROVED);

        if(!tenant.isPresent()){
            throw new TenantNotFoundException("tenant profile does not exist");
        }

        Map image = cloudinaryService.upload(request.getImage());

        Post post = Post.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .price(request.getPrice())
                .imageUrl((String) image.get("url"))
                .availabilityStatus(AvailabilityStatus.AVAILABLE)
                .tenant(tenant.get())
                .build();
        postRepository.save(post);

        return PostResponse.builder()
                .isSuccess(true)
                .message("Post created.")
                .timeStamp(new Date())
                .build();
    }

    @Override
    public PostResponse updatePost(UpdatePostRequest request) {
        return null;
    }

    @Override
    public PostResponse deletePost(Long id) {
        return null;
    }
}
