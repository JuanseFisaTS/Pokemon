package com.jsh.poke.data.model;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class Result {

     private int id;
    private String name;
    private double height;
    private double weight;
    private String description;
    private List<Pokemon.Types> types;
    private List<Pokemon.Weaknesses> weaknesses;
    private int hp;
    private int attack;
    private int defense;
    private int speed;

    public static class ResultBuilder {

        @Override
        public String toString() {
            return "Pokemon Information \n" +
                    "Code: " + id +
                    "\nName: " + name +
                    "\nDescription: " + description +
                    "\nTypes: " + types +
                    "\nWeaknesses: " + weaknesses +
                    "\nHP: " + hp+
                    "\nAttack: " + attack+
                    "\nDefense: " + defense+
                    "\nSpeed: " + speed;
        }
    }

    @Builder
    @Getter
    public static class Field {
        private String name;
        private String description;

        @Override
        public String toString() {
            return String.format("Name: %s Description: %s", name, description);
        }
    }

}
