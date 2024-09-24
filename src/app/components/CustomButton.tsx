/* eslint-disable */

import React from 'react';
import { motion } from 'framer-motion';

interface CustomButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

export const CustomButton = ({ onClick, icon, label }: CustomButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 text-white text-xs font-medium py-1 px-2 rounded-md transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  );
};