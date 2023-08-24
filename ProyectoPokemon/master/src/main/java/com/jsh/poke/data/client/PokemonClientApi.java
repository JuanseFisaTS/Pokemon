package com.jsh.poke.data.client;

import com.jsh.poke.data.model.Pokemon;
import com.jsh.poke.data.model.PokemonField;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "pokemonApi", url="https://pokeapi.co/api/v2/")
public interface PokemonClientApi {

    @GetMapping("/pokemon/{pokemon}")
    Pokemon getPokemonInfo(@PathVariable String pokemon);

    @GetMapping("/field/{name}")
    PokemonField getPokemonField(@PathVariable String name);

}
