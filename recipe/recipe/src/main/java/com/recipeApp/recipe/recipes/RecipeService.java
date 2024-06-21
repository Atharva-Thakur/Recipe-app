package com.recipeApp.recipe.recipes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipesRepository recipeRepository;

    public List<Recipes> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipes getRecipeById(String id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public Recipes createRecipe(Recipes recipe) {
        return recipeRepository.save(recipe);
    }

    public Recipes updateRecipe(String id, Recipes recipe) {
        recipe.setId(id);
        return recipeRepository.save(recipe);
    }

    public void deleteRecipe(String id) {
        recipeRepository.deleteById(id);
    }
}

