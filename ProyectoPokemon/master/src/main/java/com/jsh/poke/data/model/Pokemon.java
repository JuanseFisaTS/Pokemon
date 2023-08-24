package com.jsh.poke.data.model;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class Pokemon {

    private int id;
    private String name;
    private double height;
    private double weight;
    private String description;
    private List<Types> types;
    private List<Weaknesses> weaknesses;
    private int hp;
    private int attack;
    private int defense;
    private int speed;



    @Builder
    @Getter
    public static class Types {
        private int id;
        private String type;
    }

    @Builder
    @Getter
    public static class Weaknesses {
        private int id;
        private String attribute;
    }




}
