package com.jsh.poke.data.controllers;

import com.jsh.poke.data.model.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import com.jsh.poke.data.service.PokemonService;

@RestController
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @GetMapping("/course/pokemon/{name}")
    public ResponseEntity<?> getPokemonInfo(@PathVariable String name) {
        Optional<Result> optionalResult = pokemonService.getInfoPokemon(name);
        if (optionalResult.isPresent()) {
            return ResponseEntity.ok(optionalResult.get());
        }
        return ResponseEntity.notFound().build();
    }

}
