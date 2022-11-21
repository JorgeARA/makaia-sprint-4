import React from "react";
import CrudRestaurantsForm from "./CrudRestaurantsForm";
import CrudRestaurantsList from "./CrudRestaurantsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function CrudRestaurants() {
  return (
    <div className="App">
        <CrudRestaurantsForm />
        <CrudRestaurantsList />  
    </div>
  );
}

export default CrudRestaurants;
