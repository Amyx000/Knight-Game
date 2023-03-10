import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./Components/Home"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }

}

export default App;
