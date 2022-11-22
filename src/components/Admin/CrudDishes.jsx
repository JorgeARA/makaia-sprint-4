import React from 'react';
import CrudDishesForm from './CrudDishesForm';
import CrudDishesList from './CrudDishesList';

function CrudDishes() {
  return (
    <div className="App">
        <CrudDishesForm />
        <CrudDishesList />  
    </div>    
  );
}

export default CrudDishes;