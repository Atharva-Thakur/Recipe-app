package com.recipeApp.recipe.ingredients;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientsRepository extends MongoRepository<Ingredients, String> {
    Ingredients findByName(String name);
}