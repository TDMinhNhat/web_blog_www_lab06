package dev.skyherobrine.app.services;

import java.util.Optional;
import java.util.stream.Stream;

public interface IServices<T, P>{
    T add(T t);
    T update(T t);
    void delete(P p) throws Exception;
    T getById(P p) throws Exception;
    Stream<T> getAll();
}
