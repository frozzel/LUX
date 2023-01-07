import React from "react";
import ProductList from "../components/ProductList";
// import Belhome from "../assets/Belhome.jpg"
import Cart from "../components/Cart";
import 'animate.css';
// import projectM from "../assets/balenciaga.png";
// import LogoBlk from "../assets/LogoBlk.png"
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";




const Home = () => {

  return (<>
    <Gallery />
    {/* <div className="sect1 row banner" style={{backgroundImage: `url(${Belhome})`}}>
    <div className='opener col-6'>
    <img src={LogoBlk} alt="Logo" className=""  />
      </div>
      <div className='opener1 col-6'>
          <img src={projectM} alt="Logo" className=""  />
      </div>
    </div> */}
  
    <div className="container">
      
      {/* <CategoryMenu /> */}
      <ProductList />
      <Cart />
    </div>
    <Footer />
    
    </>);
};

export default Home;
