import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Slide = ({
  children,
  isVisible,
}: {
  children: ReactNode;
  isVisible: boolean;
  isFirst?: boolean;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
