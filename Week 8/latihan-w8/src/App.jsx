import { useState } from 'react'
import './App.css'
import {FilterProduct} from "./components/FilterProduct.jsx";

function App() {
  return (
      <FilterProduct products={products} />
  )
}

export default App
