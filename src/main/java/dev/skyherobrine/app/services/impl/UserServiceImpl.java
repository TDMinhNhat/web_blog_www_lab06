package dev.skyherobrine.app.services.impl;

import dev.skyherobrine.app.exceptions.EntityIDNotFound;
import dev.skyherobrine.app.models.User;
import dev.skyherobrine.app.repositories.UserRepository;
import dev.skyherobrine.app.services.IServices;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Stream;

@Service
public class UserServiceImpl implements IServices<User,Long> {
    private UserRepository ur;

    public UserServiceImpl(UserRepository ur) {
        this.ur = ur;
    }

    @Override
    public User add(User user) {
        return ur.save(user);
    }

    @Override
    public User update(User user) {
        return ur.save(user);
    }

    @Override
    public void delete(Long aLong) throws EntityIDNotFound {
        ur.delete(getById(aLong));
    }

    @Override
    public User getById(Long aLong) throws EntityIDNotFound{
        return ur.findById(aLong).orElseThrow(() -> new EntityIDNotFound(aLong + ""));
    }

    @Override
    public Stream<User> getAll() {
        return ur.findAll().stream();
    }
}
