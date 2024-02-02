import React, { useState } from "react";

function NewRecipeForm({ onAddRecipe }) {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddRecipe({ recipeName, ingredients, directions });
    resetForm();
  };

  const resetForm = () => {
    setRecipeName("");
    setIngredients("");
    setDirections("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center new-recipe-form">
      <div className="card new-recipe-form-card">
        <div className="card-body">
          <h1 className="card-title text-right my-2">Add Recipe</h1>
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="recipeName" className="form-label">
                <strong>Recipe Name</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="recipeName"
                value={recipeName}
                onChange={(event) => setRecipeName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ingredients" className="form-label">
                <strong>Ingredients</strong>
              </label>
              <textarea
                className="form-control"
                id="ingredients"
                rows="5"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="directions" className="form-label">
                <strong>Directions</strong>
              </label>
              <textarea
                className="form-control"
                id="directions"
                rows="10"
                value={directions}
                onChange={(event) => setDirections(event.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary me-2">
                Save
              </button>
              <button type="button" className="btn btn-secondary" onClick={resetForm}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewRecipeForm;
