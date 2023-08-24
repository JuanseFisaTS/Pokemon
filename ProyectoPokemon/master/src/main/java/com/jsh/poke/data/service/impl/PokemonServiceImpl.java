package com.jsh.poke.data.service.impl;

import com.jsh.poke.data.controllers.GenerateData;
import com.jsh.poke.data.model.Pokemon;
import com.jsh.poke.data.model.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import com.jsh.poke.data.client.PokemonClientApi;
import com.jsh.poke.data.service.PokemonService;


@Service
public class PokemonServiceImpl implements PokemonService {

    @Autowired
    private PokemonClientApi pokemonClientApi;

    @Override
    public Optional<Result> getInfoPokemon(String name) {
        Pokemon pokemonInfo = pokemonClientApi.getPokemonInfo(name);
        GenerateData generateData = new GenerateData(pokemonInfo, pokemonClientApi);
        return generateData.getInformation();
    }
}
