// App.js

import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import About from './UploadUser/About';
import Searchuserbyidpage from './SearchUser/Searchuserbyidpage';
import Home from './Home/Home';
import Navbar from './NavigationBar/Navbar'




const App = () => {
  
  return (
    
    <Router>
      <Navbar />
      <div style={{overflowY: 'auto',
 maxheight:'100vh'}} >
        <Routes>
           <Route path="/UploadImageforUser" element={<About />} />
           
           <Route path="/searchuserbyidpage" element={<Searchuserbyidpage />} />
           <Route path="/home" element={<Home />} />
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
