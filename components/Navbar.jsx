'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-1/2" />
    <div
      className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
    >
      <img src="/search.svg" alt="search" className="h-6 w-6 object-contain" />
      <h2 className="text-2xl font-extrabold text-white">METAVERSUS</h2>
      <img src="/menu.svg" alt="menu" className="h-6 w-6 object-contain" />
    </div>
  </motion.nav>
);

export default Navbar;
