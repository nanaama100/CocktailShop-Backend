import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


// importing the files into the App.jsx for viewing
import CustomerFrontend from './FrontPage';
import CocktailData from './CocktailSet';
import SingleCocktail from './SingleCocktail';




function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<CustomerFrontend/>}/>
        <Route path='/CocktailShop' element={<CocktailData/>}/>
        <Route path='/cocktails/:id' element={<SingleCocktail/>}/>
      </Routes>
    </Router>
  )
}

export default App
