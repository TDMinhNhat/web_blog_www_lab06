package dev.skyherobrine.app.resources;

import dev.skyherobrine.app.repositories.PostRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/posts")
public class PostControllers {

    @Autowired
    private PostRepository pr;

    @PutMapping("publish/{postId}")
    public ResponseEntity<?> allowPublishPost(@PathParam("postId") Long postId){
        pr.publishPost(postId);
        return ResponseEntity.ok(pr.findById(postId).orElse(null));
    }
}
