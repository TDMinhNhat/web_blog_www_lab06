package dev.skyherobrine.app.configs;

import dev.skyherobrine.app.models.Post;
import dev.skyherobrine.app.models.PostComment;
import dev.skyherobrine.app.models.User;
import dev.skyherobrine.app.projections.PostCommentProject;
import dev.skyherobrine.app.projections.PostProject;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class RestResourcesConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(User.class);
        config.exposeIdsFor(Post.class);
        config.exposeIdsFor(PostComment.class);

        config.getProjectionConfiguration().addProjection(PostProject.class);
        config.getProjectionConfiguration().addProjection(PostCommentProject.class);
    }
}
