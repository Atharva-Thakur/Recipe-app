package com.recipeApp.recipe.ingredients;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
public class IngredientsController {

    @Autowired
    private IngredientsService ingredientService;

    @GetMapping
    public List<Ingredients> getAllIngredients() {
        return ingredientService.getAllIngredients();
    }

    @GetMapping("/{id}")
    public Ingredients getIngredientById(@PathVariable String id) {
        return ingredientService.getIngredientById(id);
    }

    @PostMapping
    public Ingredients createIngredient(@RequestBody Ingredients ingredient) {
        return ingredientService.createIngredient(ingredient);
    }

    @PutMapping("/{id}")
    public Ingredients updateIngredient(@PathVariable String id, @RequestBody Ingredients ingredient) {
        return ingredientService.updateIngredient(id, ingredient);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteIngredient(@PathVariable String id) {
        ingredientService.deleteIngredient(id);
        return ResponseEntity.ok().build();
    }
}
