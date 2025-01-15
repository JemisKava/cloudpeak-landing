import { NAV_LINKS } from "@/constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  const menuVariants = {
    initial: {
      opacity: 0,
      y: -10,
      scaleY: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scaleY: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      {/* mobile menu button */}
      <div className="hidden sm:block cursor-pointer z-[60]" onClick={onToggle}>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="text-white" height={40} width={40} />
          ) : (
            <Menu className="text-white" height={40} width={40} />
          )}
        </motion.div>
      </div>

      {/* Mobile menu overlay with AnimatePresence */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-[119px] left-0 right-0 mx-4 bg-[#05071a] shadow-custom-inset rounded-[20px] border border-[#1C244C] z-50"
          >
            <div className="py-6">
              <ul className="flex flex-col space-y-5">
                {NAV_LINKS.map((link, key) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * key }}
                  >
                    <a
                      href={link.href}
                      onClick={onToggle}
                      className="block px-6 py-1 text-[18px] font-medium text-neutral-2 hover:text-neutral-1 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
