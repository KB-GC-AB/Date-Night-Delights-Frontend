import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./pages/Recipe";
import NewRecipe from "./pages/NewRecipe";
import AllRecipes from "./pages/Listings";
import UpdateRecipe from "./pages/UpdateRecipe"
import SearchRecipe from "./pages/SearchRecipe"
//container comp
function App() {
  let routes;

  routes = (
    <Routes>
      <Route exact={true} path="/" element={<AllRecipes />} />
      <Route path="/new" element={<NewRecipe />} />
      <Route path="/:id" element={<Recipe />} />
      <Route path="/:id/edit" element={<UpdateRecipe />} />
      <Route path="/search" element={<SearchRecipe />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  return (
    <div className="App">
      <main>{routes}</main>
    </div>
  );
}

export default App;
