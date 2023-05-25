import React, { useEffect, useState } from "react";
import "./Listings.css";
import { NavLink } from "react-router-dom";
import Recipe from "../components/Recipe";
import Navbar from "../components/Navbar";

function Listings() {
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const URL = "http://localhost:4000/recipes";

  useEffect(() => {
    const fetchListings = async () => {
      try {
        let responseData = await fetch(URL);
        let allListings = await responseData.json();
        setListings(allListings);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchListings();
  }, []);

  let ListingsList;

  if (listings) {
    ListingsList = listings.map((recipe, index) => {
      return <Recipe key={index} recipe={recipe} />;
    });
  }

  return (
    <div className="listings">
      <Navbar></Navbar>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : listings ? (
        <ul className="recipe-list">{ListingsList}</ul>
      ) : (
        <h2>Error: Failed to fetch listings</h2>
      )}
    </div>
  );
}

export default Listings;