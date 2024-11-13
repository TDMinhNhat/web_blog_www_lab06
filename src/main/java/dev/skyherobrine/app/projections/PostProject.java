package dev.skyherobrine.app.projections;

import dev.skyherobrine.app.models.Post;
import dev.skyherobrine.app.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.time.Instant;

@Projection(name = "post", types = {Post.class})
public interface PostProject {
    Long getId();
    String getTitle();
    String getMetaTitle();
    String getContent();
    String getSummary();
    boolean isPublished();
    Instant getCreatedAt();
    Instant getUpdatedAt();
    Instant getPublishedAt();
    Post getParent();
    User getAuthor();
}
