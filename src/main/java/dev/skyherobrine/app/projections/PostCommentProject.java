package dev.skyherobrine.app.projections;

import dev.skyherobrine.app.models.Post;
import dev.skyherobrine.app.models.PostComment;
import dev.skyherobrine.app.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.time.Instant;

@Projection(name = "postComment", types = { PostComment.class })
public interface PostCommentProject {
    Long getId();
    String getTitle();
    String getContent();
    Post getPost();
    PostComment getParent();
    User getUser();
    boolean isPublished();
    Instant getCreatedAt();
    Instant getPublishedAt();
}
