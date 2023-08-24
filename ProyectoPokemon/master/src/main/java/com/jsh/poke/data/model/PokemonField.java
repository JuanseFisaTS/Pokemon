package com.jsh.poke.data.model;

import lombok.Builder;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Builder
@Getter
public class PokemonField {

    private int id;
    private String name;
    private String description;

}
