"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://i.ibb.co.com/HLT5sPvJ/pexels-thorsten-technoman-109353-338504.jpg",
    title: "Welcome to ElysianNest",
    description: "Experience luxury and comfort in our serene resort.",
  },
  {
    image: "https://i.ibb.co.com/dskYzRFk/pexels-mdkamal-30722813.jpg",
    title: "Your Perfect Getaway",
    description: "Escape to paradise and enjoy nature’s beauty.",
  },
  {
    image: "https://i.ibb.co.com/RpndX2Px/pexels-pixabay-261204.jpg",
    title: "Unforgettable Stays",
    description: "Relax in our world-class accommodations.",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Image Transition */}
      <AnimatePresence mode="wait">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: i === index ? 0 : 1 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth fade transition
          >
            {/* Overlay to enhance text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Text Transition */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold drop-shadow-md">{slides[index].title}</h1>
            <p className="text-lg mt-2 drop-shadow-md">{slides[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
