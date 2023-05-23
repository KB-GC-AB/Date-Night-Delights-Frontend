import React, { useEffect, useState } from "react";
import "./Listings.css";
import { NavLink } from "react-router-dom";
import Recipe from "../components/Recipe";
import Navbar from "../components/Navbar";

//index page that shows all of our people on display
//contain componenet to fetch and display people
function Listings() {
  const [listings, setListings] = useState(null);

  const URL = "http://localhost:4000/recipes";

  useEffect(() => {
    //useeffect will render once when the compon is mounted.
    //if array dep. is left empty, it will only execute it's code once.
    console.log("UseEffect ran 🪝");
    const fetchListings = async () => {
      try {
        let responseData = await fetch(URL);
        let allListings = await responseData.json();
        console.log(allListings);
        setListings(allListings);
      } catch (error) {}
    }; //end of func

    // setTimeout(fetchPeople, 2000);
    fetchListings();
  }, []);

  let ListingsList;

  //if there is something in state, then loop through and use it
  if (listings) {
    ListingsList = listings.map((recipe, index) => {
      return <Recipe key={index} recipe={recipe} />;
    });
  }

  return (
    <div className="listings">
      <Navbar></Navbar>
      {listings ? (
        <ul className="recipe-list">{ListingsList}</ul>
      ) : (
        <h2>LOADING...</h2>
      )}
    </div>
  );
}

export default Listings;