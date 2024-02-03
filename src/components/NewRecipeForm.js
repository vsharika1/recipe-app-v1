import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

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
            <div className="form-floating my-3">
              <input
                type="text"
                className="form-control"
                id="recipeName"
                placeholder="Recipe Name"
                value={recipeName}
                onChange={(event) => setRecipeName(event.target.value)}
                required
              />
              <label htmlFor="recipeName" className="form-label">
                Recipe Name
              </label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="ingredients"
                placeholder="Ingredients"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
                required
              />
              <label htmlFor="ingredients" className="form-label">
                Ingredients
              </label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="directions"
                placeholder="Directions"
                value={directions}
                onChange={(event) => setDirections(event.target.value)}
                required
              />
              <label htmlFor="directions" className="form-label">
                Directions
              </label>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={resetForm}
              >
                <RestartAltIcon /> Reset
              </button>
              <button type="submit" className="btn btn-primary">
                <SaveIcon /> Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewRecipeForm;
