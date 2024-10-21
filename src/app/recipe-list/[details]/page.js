import React from "react";
import RecipeDetails from '@/components/recipe-details'

async function recipeIngrediants( recipesId ) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${recipesId}`
    );
    const data = await apiResponse.json();

    return data;
  } catch (e) {
    throw new Error(e);
  }
}

async function recipeDetails({ params }) {
  const recipeIngridants = await recipeIngrediants(params?.details);
  return (
    <RecipeDetails recipeIngridants={recipeIngridants}/>
  )
}

export default recipeDetails;
