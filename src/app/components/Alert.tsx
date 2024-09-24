/* eslint-disable */

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const CustomAlert = ({ message }: { message: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-green-500 text-white px-3 py-1 rounded-md shadow-lg"
    >
      <div className="flex items-center space-x-2">
        <CheckCircle size={16} />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </motion.div>
  );
};