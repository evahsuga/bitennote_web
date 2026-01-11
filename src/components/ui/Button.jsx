import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'large',
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = "font-heading font-semibold rounded-full transition-all duration-300";

  const variants = {
    primary: "bg-gradient-to-r from-primary-coral to-primary-peach text-white hover:shadow-xl hover:scale-105",
    secondary: "bg-white border-2 border-primary-coral text-primary-coral hover:bg-primary-coral hover:text-white",
  };

  const sizes = {
    large: "px-12 py-4 text-lg",
    medium: "px-8 py-3 text-base",
    small: "px-6 py-2 text-sm",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};
