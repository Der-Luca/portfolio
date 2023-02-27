import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src="https://via.placeholder.com/400x200"
        alt="Placeholder Image"
        className="mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold text-center">Ihr IT-Dienstleister nebenan</h1>
    </motion.div>
  );
};

export default Home;
