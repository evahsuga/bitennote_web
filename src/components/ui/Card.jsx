import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true }) => {
  const baseStyles = "bg-white rounded-3xl p-8 shadow-lg";

  if (hover) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
};
