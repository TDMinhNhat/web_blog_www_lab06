package dev.skyherobrine.app.services.impl;

import dev.skyherobrine.app.exceptions.EntityIDNotFound;
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
    public void delete(Long aLong) throws EntityIDNotFound{
        pr.delete(getById(aLong));
    }

    @Override
    public Post getById(Long aLong) throws EntityIDNotFound {
        return pr.findById(aLong).orElseThrow(() -> new EntityIDNotFound(aLong + ""));
    }

    @Override
    public Stream<Post> getAll() {
        return pr.findAll().stream();
    }
}
