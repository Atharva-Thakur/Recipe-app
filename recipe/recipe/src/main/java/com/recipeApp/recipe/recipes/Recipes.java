package com.recipeApp.recipe.recipes;

import com.recipeApp.recipe.ingredients.Ingredients;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "recipes")
public class Recipes {

    @Id
    private String id;
    private String title;
    private String description;
    private List<String> instructions;
    private List<Ingredient> ingredients;
    private Nutrition nutrition;

    private Date createdAt;

    // Getters and setters


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getInstructions() {
        return instructions;
    }

    public void setInstructions(List<String> instructions) {
        this.instructions = instructions;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public Nutrition getNutrition() {
        return nutrition;
    }

    public void setNutrition(Nutrition nutrition) {
        this.nutrition = nutrition;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public static class Ingredient {
        @DBRef
        private Ingredients ingredient;
        private String name;
        private String quantity;

        // Getters and setters

        public Ingredients getIngredient() {
            return ingredient;
        }

        public void setIngredient(Ingredients ingredient) {
            this.ingredient = ingredient;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getQuantity() {
            return quantity;
        }

        public void setQuantity(String quantity) {
            this.quantity = quantity;
        }
    }

    public static class Nutrition {
        private int calories;
        private int carbs;
        private int proteins;
        private int fats;

        // Getters and setters


        public int getCalories() {
            return calories;
        }

        public void setCalories(int calories) {
            this.calories = calories;
        }

        public int getCarbs() {
            return carbs;
        }

        public void setCarbs(int carbs) {
            this.carbs = carbs;
        }

        public int getProteins() {
            return proteins;
        }

        public void setProteins(int proteins) {
            this.proteins = proteins;
        }

        public int getFats() {
            return fats;
        }

        public void setFats(int fats) {
            this.fats = fats;
        }
    }
}
