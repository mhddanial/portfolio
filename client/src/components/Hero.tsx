import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroVideo from "@assets/videos/hero.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm md:text-base font-mono text-primary mb-6 tracking-widest uppercase">
              Global Creative Studio
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight tracking-tight mb-8">
              Designing the <br />
              <span className="text-gradient-accent">Future Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              We craft immersive digital experiences for brands that dare to lead.
              From strategy to execution, we redefine what's possible.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#work"
                className="px-8 py-4 bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:scale-105 w-full sm:w-auto"
              >
                View Our Work
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
