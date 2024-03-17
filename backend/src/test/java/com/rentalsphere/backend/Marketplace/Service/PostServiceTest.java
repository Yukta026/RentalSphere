package com.rentalsphere.backend.Marketplace.Service;

import com.rentalsphere.backend.Enums.ApplicationStatus;
import com.rentalsphere.backend.Enums.AvailabilityStatus;
import com.rentalsphere.backend.Exception.Post.PostNotFoundException;
import com.rentalsphere.backend.Exception.Tenant.TenantNotFoundException;
import com.rentalsphere.backend.Marketplace.Model.Post;
import com.rentalsphere.backend.Marketplace.Repository.PostRepository;
import com.rentalsphere.backend.RequestResponse.Post.CreatePostRequest;
import com.rentalsphere.backend.RequestResponse.Post.PostResponse;
import com.rentalsphere.backend.RequestResponse.Post.UpdatePostRequest;
import com.rentalsphere.backend.Services.Cloudinary.CloudinaryService;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.Tenant.Repository.TenantRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockMultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class PostServiceTest {
    @InjectMocks
    private PostService postService;
    @Mock
    private PostRepository postRepository;
    @Mock
    private TenantRepository tenantRepository;
    @Mock
    private CloudinaryService cloudinaryService;
    @Mock
    private Tenant tenant;
    @Mock
    private Post post;
    @Mock
    private MockMultipartFile file;
    private CreatePostRequest createPostRequest;
    private UpdatePostRequest updatePostRequest;
    private Map<String, String> map;

    @BeforeEach
    void init(){
        tenant = Tenant.builder()
                .tenantID(1L)
                .phoneNumber("9999999999")
                .emailAddress("patel@gmail.com")
                .dateOfBirth(new Date())
                .socialSecurityNumber("1234567890")
                .streetAddress("some street")
                .desiredMoveInDate(new Date())
                .leaseTermMonths(12)
                .numOccupants(2)
                .currentEmployer("some employer")
                .lengthOfEmployment(1)
                .applicationStatus(ApplicationStatus.APPROVED)
                .creationDate(new Date())
                .build();
        map = Map.of("url", "some url");
        createPostRequest = new CreatePostRequest("patel@gmail.com", "title", "description", 2000.00, file);
        updatePostRequest = new UpdatePostRequest(1L, "new title", "new description", 1500.00, file, AvailabilityStatus.SOLD);
    }

    @Test
    void testCreatePost() throws IOException {
        when(tenantRepository.findByEmailAddressAndApplicationStatus(anyString(), any(ApplicationStatus.class))).thenReturn(Optional.ofNullable(tenant));
        when(cloudinaryService.upload(any())).thenReturn(map);

        when(postRepository.save(any(Post.class))).thenReturn(post);

        PostResponse postResponse = postService.createPost(createPostRequest);

        assertTrue(postResponse.isSuccess());
    }

    @Test
    void testCreatePostTenantNotFoundException(){
        when(tenantRepository.findByEmailAddressAndApplicationStatus(anyString(), any(ApplicationStatus.class))).thenReturn(Optional.empty());

        assertThrows(TenantNotFoundException.class, ()->{
           postService.createPost(createPostRequest);
        });
    }

    @Test
    void testUpdatePost() throws IOException {
        when(postRepository.findById(updatePostRequest.getId())).thenReturn(Optional.of(post));

        PostResponse postResponse = postService.updatePost(updatePostRequest);

        assertTrue(postResponse.isSuccess());
    }

    @Test
    void testUpdatePostPostNotFoundException(){
        when(postRepository.findById(updatePostRequest.getId())).thenReturn(Optional.empty());

        assertThrows(PostNotFoundException.class, ()->{
            postService.updatePost(updatePostRequest);
        });
    }

    @Test
    void testDeletePost(){
        when(postRepository.findById(anyLong())).thenReturn(Optional.of(post));

        PostResponse response = postService.deletePost(anyLong());

        verify(postRepository).deleteById(anyLong());
        assertTrue(response.isSuccess());
    }

    @Test
    void testDeletePostPostNotFoundException(){
        when(postRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(PostNotFoundException.class, ()->{
            postService.deletePost(anyLong());
        });
    }
}
