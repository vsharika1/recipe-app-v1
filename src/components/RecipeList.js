import React from "react";

function RecipeList({ recipes, onSelectRecipe, onDeleteRecipe }) {
  const handleDelete = (event, index) => {
    event.stopPropagation();
    onDeleteRecipe(index);
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-lg-12">
          <div className="card my-4 saved-recipe">
            <div className="card-body">
              <h1 className="card-title mb-4">Saved Recipes</h1>
              <ul className="list-unstyled">
                {recipes.map((recipe, index) => (
                  <li key={index} className="mb-2">
                    <div
                      className="card d-flex"
                      onClick={() => onSelectRecipe(recipe)}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col">{recipe.recipeName}</div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm float-end"
                              onClick={(event) => handleDelete(event, index)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
