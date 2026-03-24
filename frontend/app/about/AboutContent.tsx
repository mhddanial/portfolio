"use client";

import { motion } from "framer-motion";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function AboutContent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <About />
            <Skills />
        </motion.div>
    );
}
