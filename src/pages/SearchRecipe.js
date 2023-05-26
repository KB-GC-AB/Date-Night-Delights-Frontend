import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import "./SearchRecipe.css"

const SearchRecipe = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipe, setRecipe] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setRecipe(data.meals[0]); //only the first matching recipe is displayed
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className='search'>
    <Navbar></Navbar>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a recipe..."
        />
        <button type="submit">Search</button>
      </form>

      {recipe && (
        <div className='recipe'>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default SearchRecipe;
