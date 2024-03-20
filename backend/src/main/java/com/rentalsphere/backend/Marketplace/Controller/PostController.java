package com.rentalsphere.backend.Marketplace.Controller;

import com.rentalsphere.backend.Marketplace.Model.Post;
import com.rentalsphere.backend.Marketplace.Service.IService.IPostService;
import com.rentalsphere.backend.RequestResponse.Post.*;
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

    @GetMapping("/{id}")
    public ResponseEntity<GetPostResponse> getPostById(@PathVariable Long id){
        return new ResponseEntity<>(postService.getPostById(id), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<GetAllPostResponse> getAllPosts(){
        return new ResponseEntity<>(postService.getAllPosts(), HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<PostResponse> updatePost(@Valid @ModelAttribute UpdatePostRequest request) throws IOException {
        return new ResponseEntity<>(postService.updatePost(request), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PostResponse> deletePost(@PathVariable Long id){
        return new ResponseEntity<>(postService.deletePost(id), HttpStatus.OK);
    }
}
