import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Router } from 'react-router-dom';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between bg-indigo-500 text-white p-6 md:justify-start">
      
        
          Luca Plessing
     
        <button
          className="bg-white text-indigo-500 p-2 rounded-full"
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        >
          Menu
        </button>
      </nav>
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-white p-4 rounded-lg shadow-lg"
            >
              <p className="text-indigo-500 font-medium">Weitere Seiten:</p>
              <ul>
                <li>
                  <Link to="/" onClick={() => setIsPopupOpen(!isPopupOpen)} className="block p-2 text-indigo-500 hover:bg-indigo-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" onClick={() => setIsPopupOpen(!isPopupOpen)} className="block p-2 text-indigo-500 hover:bg-indigo-100">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/hobbies" onClick={() => setIsPopupOpen(!isPopupOpen)}  className="block p-2 text-indigo-500 hover:bg-indigo-100">
                    Hobbies
                  </Link>
                </li>
              </ul>
              <button
                className="text-white bg-indigo-500 p-2 rounded-full"
                onClick={() => setIsPopupOpen(!isPopupOpen)}
              >
               Cloese Menu
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
