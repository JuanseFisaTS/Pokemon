package com.jsh.poke.data.service;

import com.jsh.poke.data.model.Result;

import java.util.Optional;

public interface PokemonService {

    Optional<Result> getInfoPokemon(String name);
}
