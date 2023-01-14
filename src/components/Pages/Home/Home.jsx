import React from "react";
import Plants from "./Categories/Plants";
import Flowers from "./Flowers/Flowers";
import Slider from "./Slider/Slider";
import Blogs from "../../Pages/Home/Blog/Blogs";
import Footer from "../../Pages/Home/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Slider />
      <Plants />
      <Flowers />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;


