import React from "react";
// import ProductList from "../components/ProductList";
import Belhome from "../assets/Belhome.jpg"
import Cart from "../components/Cart";
import 'animate.css';
import projectM from "../assets/Gucci.png"




const Home = () => {

  return (<>
    <div className="row banner" style={{backgroundImage: `url(${Belhome})`}}>
    <div className='opener'>
          <img src={projectM} alt="Logo" className=""  />
          </div>
    </div>

    <div className="container">
      
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      <Cart />
    </div>
    </>);
};

export default Home;
