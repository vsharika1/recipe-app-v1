import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "600px",
  maxHeight: "70vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  overflowY: "auto",
  display: "block",
};

const StyledDeleteButton = styled(Button)({
  minWidth: 40,
  height: 40,
  position: "absolute",
  right: 10,
  bottom: 10,
  borderRadius: "50%",
  color: "red",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "red",
    color: "white",
  },
  "& .MuiButton-startIcon": {
    marginRight: "0px",
    marginLeft: "0px",
  },
});

function RecipeList({ recipes, onDeleteRecipe }) {
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleOpen(recipe) {
    setSelectedRecipe(recipe);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDelete(event, index) {
    event.stopPropagation();
    onDeleteRecipe(index);
  }

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
                    <div className="card" onClick={() => handleOpen(recipe)}>
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <Typography variant="subtitle1" component="h2">
                          {recipe.recipeName}
                        </Typography>
                        <StyledDeleteButton
                          onClick={(event) => {
                            handleDelete(event, index);
                          }}
                          startIcon={<DeleteIcon />}
                        />
                      </div>
                    </div>
                  </li>
                ))}

                {selectedRecipe && (
                  <Modal open={open} onClose={handleClose}>
                    <Box sx={modalStyle}>
                      <Typography
                        className="modalTitle"
                        variant="h6"
                        component="h2"
                      >
                        {selectedRecipe?.recipeName}
                      </Typography>
                      <Typography className="modalContent" sx={{ mt: 2 }}>
                        <strong>Ingredients:</strong>
                        <ul>
                          {selectedRecipe?.ingredients
                            .split(/,\s|\n/)
                            .map((ingredient, index) => {
                              if (ingredient) {
                                return (
                                  <li key={index}>
                                    {ingredient.trim()}
                                  </li>
                                );
                              }
                              return null;
                            })}
                        </ul>
                        <strong>Directions:</strong>
                        <ol>
                          {selectedRecipe?.directions
                            .split(/\. |\n/)
                            .map((direction, index) => {
                              if (direction) {
                                return (
                                  <li key={index}>
                                    {direction.trim()}
                                  </li>
                                );
                              }
                              return null;
                            })}
                        </ol>
                      </Typography>
                      <Button
                        onClick={handleClose}
                        id="closeButton"
                      >
                        <CloseIcon />
                      </Button>
                    </Box>
                  </Modal>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
