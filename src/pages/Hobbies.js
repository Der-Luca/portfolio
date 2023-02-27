import React from 'react'
import { motion } from "framer-motion";

function Hobbies() {
  return (  <motion.div
             initial={{ x: -1000, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
             >
               <div>
                test
               </div>
          </motion.div>
  )
}

export default Hobbies