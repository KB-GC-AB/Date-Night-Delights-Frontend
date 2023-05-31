import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Recipe.css"
import Navbar from "../components/Navbar";

function Recipe() {
  const [recipeState, setRecipeState] = useState(null);

  const [number, setNumber] = useState(5);

  const { id } = useParams();
  console.log(useParams());
  const url = `http://localhost:4000/recipes/${id}`; //fetch a recipe by id this will reach our server.

  //useeffect will only run once []
  useEffect(() => {
    //this is the code that gets activated
    console.log("Componenet mounted.🏗️. This will only happen once");
  }, []); //faking out useeffect to "wait" on a change from the array of dependencies. But we don't have any in there...snicker snicker......

  useEffect(() => {
    const fetchRecipe = async () => {
      console.log("going to fetch recipe with id of: ", id);
      try {
        const responseData = await fetch(url);
        const recipeData = await responseData.json(); //converting our html response that we got from the server into a useable recipe{object}.
        console.log(recipeData); //usable recipe
        console.log(
          "Setting state, about to rerender..(not remount, just re-render)."
        );
        setRecipeState(recipeData);
      } catch (error) {}
    };
    //this is the code that gets activated
    console.log("#2: inside useeffect...component mounted, now we are here.");

    fetchRecipe(); //fetching data and setting state
  }, [id, number]);

  return (
    <div className="recipe">
      <Navbar></Navbar>
      {console.log("#1: 🖼️Rendering component...")}
      {recipeState ? (
        <>
          <div className="recipe-data">
            <h2>{recipeState.name}</h2>
            <div className="recipe-pic">
              <img
                className="delight-pic"
                src={recipeState.image}
                alt="delight pic"
              />
            </div>

            <h3>Ingredients:</h3>
            <ul>{recipeState.ingredients}</ul>
            <h3>Instructions:</h3>
            <li>{recipeState.instructions}</li>
            <Link to={`/${recipeState._id}/edit`}>
              <button>EDIT</button>
            </Link>
          </div>
        </>
      ) : (
        "...loading"
      )}
    </div>
  );
}

export default Recipe;