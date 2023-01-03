import React from "react";
// import ProductList from "../components/ProductList";
import Belhome from "../assets/Belhome.jpg"
import Cart from "../components/Cart";




const Home = () => {

  return (<>
    <div className="row banner" style={{backgroundImage: `url(${Belhome})`}}>
      
    </div>

    <div className="container">
      
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      <Cart />
    </div>
    </>);
};

export default Home;
