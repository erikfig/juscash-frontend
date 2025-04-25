import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { JSX } from 'react';

export const motionWrapper = (element: JSX.Element, from: string, to: string) => {
  const location = useLocation();

  return (
    <motion.div
      initial={location.pathname === from ? { x: '100%' } : undefined}
      animate={{ x: 0 }}
      exit={location.pathname === to ? { x: '-100%' } : undefined}
      transition={{ duration: 0.5 }}
    >
      {element}
    </motion.div>
  );
};
