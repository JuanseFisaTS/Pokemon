package com.jsh.poke.data.controllers;

import com.jsh.poke.data.model.Pokemon;
import com.jsh.poke.data.model.PokemonField;
import com.jsh.poke.data.model.Result;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import com.jsh.poke.data.client.PokemonClientApi;

@Slf4j
public class GenerateData {

    private Pokemon pokemon;
    private PokemonClientApi pokemonClientApi;

    public GenerateData(Pokemon pokemon, PokemonClientApi pokemonClientApi) {
        this.pokemon = pokemon;
        this.pokemonClientApi = pokemonClientApi;
    }

    public Optional<Result> getInformation() {
        if (pokemon != null) {
            Result.ResultBuilder resultBuilder = Result.builder();
            resultBuilder.id(pokemon.getId());
            resultBuilder.name(pokemon.getName());
            String description = pokemon.getDescription();
            
            /*List<String> types = pokemon.getTypes().stream()
                    .map(Pokemon.Types::getType).collect(Collectors.toList());
            resultBuilder.types(types);*/
      
            return Optional.of(resultBuilder.build());
        }
        return Optional.empty();
    }

}
