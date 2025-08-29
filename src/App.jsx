import Main from './assets/Compounds/Main'
import Home from './assets/Compounds/Home'
import Requirements from './assets/Compounds/Requirements'
import Safety from './assets/Compounds/Safety'
import Locate from './assets/Compounds/Locate'
import Foot from './assets/Compounds/Foot'
import Sign from './assets/Compounds/Sign'
import Ppp from './assets/Compounds/Ppp'
import Who from './assets/Compounds/Who'
import Suggestion from './assets/Compounds/Suggestion'
import Mehranpkg from './assets/Compounds/Mehranpkg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './assets/Compounds/Header'
import React, { useState } from "react";
import Altopkgx from './assets/Compounds/Altopkgx'
import Japan from './assets/Compounds/Japan'
import Drivingtest from './assets/Compounds/Drivingtest'

const App = () => {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
       <Header/>
          <Main />
          <Home />
          <Requirements />
          <Ppp />
          <Who />
          <Safety />
          <Sign />
          <Locate />
          <Suggestion />
          <Foot />
        </>
      )
    },
    {
      path: "/mehran manual",
      element: <Mehranpkg />
    },
    {
      path: "/alto auto",
      element: <Altopkgx/>
    },
    {
      path: "/japan",
      element: <Japan/>
    },
    {
      path: "/test",
      element: <Drivingtest/>
    }
    
    
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
