package com.rentalsphere.backend.Marketplace.Controller;

import com.rentalsphere.backend.Marketplace.Service.PostService;
import com.rentalsphere.backend.RequestResponse.Post.CreatePostRequest;
import com.rentalsphere.backend.RequestResponse.Post.PostResponse;
import com.rentalsphere.backend.RequestResponse.Post.UpdatePostRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class PostControllerTest {
    @InjectMocks
    private PostController postController;
    @Mock
    private PostService postService;
    @Mock
    private CreatePostRequest createPostRequest;
    @Mock
    private UpdatePostRequest updatePostRequest;
    private PostResponse postResponse;

    @BeforeEach
    void init(){

    }

    @Test
    void testCreatePost() throws IOException {
        postResponse = PostResponse.builder()
                .isSuccess(true)
                .message("Post created.")
                .timeStamp(new Date())
                .build();

        ResponseEntity<?> responseEntity = new ResponseEntity<>(postResponse, HttpStatus.CREATED);

        when(postService.createPost(createPostRequest)).thenReturn(postResponse);

        assertEquals(responseEntity, postController.createPost(createPostRequest));
    }

    @Test
    void testUpdatePost() throws IOException {
        postResponse = PostResponse.builder()
                .isSuccess(true)
                .message("Post updated.")
                .timeStamp(new Date())
                .build();

        ResponseEntity<?> responseEntity = new ResponseEntity<>(postResponse, HttpStatus.OK);

        when(postService.updatePost(updatePostRequest)).thenReturn(postResponse);

        assertEquals(responseEntity, postController.updatePost(updatePostRequest));
    }

    @Test
    void testDeletePost(){
        postResponse = PostResponse.builder()
                .isSuccess(true)
                .message("Post deleted.")
                .timeStamp(new Date())
                .build();

        ResponseEntity<?> responseEntity = new ResponseEntity<>(postResponse, HttpStatus.OK);

        when(postService.deletePost(anyLong())).thenReturn(postResponse);

        assertEquals(responseEntity, postController.deletePost(anyLong()));
    }
}
