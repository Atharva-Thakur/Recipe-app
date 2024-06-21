package com.recipeApp.recipe.recipes;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipesRepository extends MongoRepository<Recipes,String>{
    List<Recipes> findByTitleContaining(String title);
    List<Recipes> findByIngredientsNameContaining(String name);
}
