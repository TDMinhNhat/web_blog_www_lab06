package dev.skyherobrine.app.services.impl;

import dev.skyherobrine.app.models.Post;
import dev.skyherobrine.app.repositories.PostRepository;
import dev.skyherobrine.app.services.IServices;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Stream;

@Service
public class PostServiceImpl implements IServices<Post,Long> {

    private PostRepository pr;

    public PostServiceImpl(PostRepository pr) {
        this.pr = pr;
    }

    @Override
    public Post add(Post post) {
        return pr.save(post);
    }

    @Override
    public Post update(Post post) {
        return pr.save(post);
    }

    @Override
    public void delete(Long aLong) {
        pr.delete(getById(aLong).get());
    }

    @Override
    public Optional<Post> getById(Long aLong) {
        return pr.findById(aLong);
    }

    @Override
    public Stream<Post> getAll() {
        return pr.findAll().stream();
    }
}
