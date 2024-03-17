package com.rentalsphere.backend.Marketplace.Service.IService;

import com.rentalsphere.backend.RequestResponse.Post.CreatePostRequest;
import com.rentalsphere.backend.RequestResponse.Post.PostResponse;
import com.rentalsphere.backend.RequestResponse.Post.UpdatePostRequest;

import java.io.IOException;

public interface IPostService {
    public PostResponse createPost(CreatePostRequest request) throws IOException;
    public PostResponse updatePost(UpdatePostRequest request);
    public PostResponse deletePost(Long id);
}
