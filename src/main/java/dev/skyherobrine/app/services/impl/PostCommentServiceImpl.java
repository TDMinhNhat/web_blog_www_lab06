package dev.skyherobrine.app.services.impl;

import dev.skyherobrine.app.models.PostComment;
import dev.skyherobrine.app.repositories.PostCommentRepository;
import dev.skyherobrine.app.services.IServices;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Stream;

@Service
public class PostCommentServiceImpl implements IServices<PostComment,Long> {

    private PostCommentRepository pcr;

    public PostCommentServiceImpl(PostCommentRepository pcr) {
        this.pcr = pcr;
    }

    @Override
    public PostComment add(PostComment postComment) {
        return pcr.save(postComment);
    }

    @Override
    public PostComment update(PostComment postComment) {
        return pcr.save(postComment);
    }

    @Override
    public void delete(Long aLong) {
        pcr.delete(getById(aLong).get());
    }

    @Override
    public Optional<PostComment> getById(Long aLong) {
        return pcr.findById(aLong);
    }

    @Override
    public Stream<PostComment> getAll() {
        return pcr.findAll().stream();
    }
}
