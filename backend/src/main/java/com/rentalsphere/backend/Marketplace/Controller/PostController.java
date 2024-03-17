package com.rentalsphere.backend.Marketplace.Controller;

import com.rentalsphere.backend.Marketplace.Service.IService.IPostService;
import com.rentalsphere.backend.RequestResponse.Post.CreatePostRequest;
import com.rentalsphere.backend.RequestResponse.Post.PostResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping(path = "/api/v1/marketplace/post")
@RequiredArgsConstructor
public class PostController {
    private final IPostService postService;

    @PostMapping("/")
    public ResponseEntity<PostResponse> createPost(@Valid @ModelAttribute CreatePostRequest request) throws IOException {
        return new ResponseEntity<>(postService.createPost(request), HttpStatus.CREATED);
    }
}
