import React from "react";
import { motion } from "framer-motion";
import luca from "../images/Luca-Samuel_Plessing_square.jpg"
const Home = () => {
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={luca}
        alt="Placeholder Image"
        className="mx-auto mb-4 mt-10 rounded-md h-80 w-80"
      />
      <h1 className="text-4xl font-bold text-center">Hello stranger...</h1>
      <p className="text-xl font-thin text-justify p-5">
      You may wonder why I designed this page... 
      Quite simply this is just to show who I am and what I like to do. 
      It serves me as a kind of portfolio. 
      Maybe it will also become a block who knows,
       but currently it is just to introduce me.
      </p>
    </motion.div>
  );
};

export default Home;
