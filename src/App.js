import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home.js';
import Blogpages from "./components/Blogpages.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attour from "./components/Attours";
import Atstays from "./components/Atstays";
import Atstaynextpage from "./components/Atstaynextpage";
import SignIn from "./components/Signin";
import Signup from "./components/SignUp";
import TermsCondition from'./components/TermsCondition'
import Privacypolicy from "./components/Privacypolicy";
import Rooms from "./components/Rooms";
import BookingForm from "./components/BookingForm";
import CartDetailsPage from "./components/CartDetailsPage";
import CartDetailsPage2 from "./components/CartDetailsPage2";
import Attournext from "./components/Attournext";
import Form from "./components/Form";
import Form2 from "./components/Form2";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bloggerpage" element={<Blogpages />} />
        <Route path="/attours" element={<Attour/>} />
        <Route path="/atstays" element={<Atstays/>} />
        <Route  path ="/atstay/:id" element={<Atstaynextpage></Atstaynextpage>}/>
        <Route path ="/signin" element={<SignIn></SignIn>} ></Route>
        <Route path ="/signup" element={<Signup></Signup>} ></Route>
        <Route path ="/terms" element={<TermsCondition></TermsCondition>} ></Route>
        <Route path ="/privacy" element={<Privacypolicy></Privacypolicy>} ></Route>
        <Route path ="/rooms/:id" element={<Rooms></Rooms>} ></Route>
        <Route path ="/booking" element={<BookingForm/>} ></Route>
        <Route path ="/cartpage/:id" element={<CartDetailsPage/>} ></Route>
        <Route path="/family-trip/:id" element={<Attournext />}></Route>
        <Route path="/cart/:id" element={<CartDetailsPage2 />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/forms" element={<Form2 />}></Route>









      </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
