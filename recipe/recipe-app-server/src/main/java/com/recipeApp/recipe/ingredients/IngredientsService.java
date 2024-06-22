package com.recipeApp.recipe.ingredients;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientsService {

    @Autowired
    private IngredientsRepository ingredientRepository;

    public List<Ingredients> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    public Ingredients getIngredientById(String id) {
        return ingredientRepository.findById(id).orElse(null);
    }

    public Ingredients createIngredient(Ingredients ingredient) {
        return ingredientRepository.save(ingredient);
    }

    public Ingredients updateIngredient(String id, Ingredients ingredient) {
        ingredient.setId(id);
        return ingredientRepository.save(ingredient);
    }

    public void deleteIngredient(String id) {
        ingredientRepository.deleteById(id);
    }
}
