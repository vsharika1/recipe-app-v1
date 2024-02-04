import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NewRecipeForm from './components/NewRecipeForm';
import RecipeList from './components/RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  function addNewRecipe(recipe) {
    const newRecipes = [...recipes, recipe];
    setRecipes(newRecipes);
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
  }

  function onDeleteRecipe(index) {
    const updatedRecipes = recipes.filter((_, recipeIndex) => recipeIndex !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  }

  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center col-recipe-form">
            <NewRecipeForm onAddRecipe={addNewRecipe} />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center col-recipe-list">
            <RecipeList recipes={recipes} onDeleteRecipe={onDeleteRecipe} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

