import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ⭐ IMPORT ALL YOUR IMAGES HERE */
import firstyear from "../assets/firstyear.jpg";
import hsc1 from "../assets/hsc1.jpg";
import hsc2 from "../assets/hsc2.jpg";
import hsc3 from "../assets/hsc3.jpg";
import hsc4 from "../assets/hsc4.jpg";
import hsc5 from "../assets/hsc5.jpg";
import mock from "../assets/mock.jpg";
import rangoli from "../assets/rangoli.jpg";
import secondyear from "../assets/secondyear.jpg";
import thirdyear from "../assets/thirdyear.jpg";
import xyz from "../assets/xyz.jpg";
import hackathonWin from "../assets/HackathonWin.jpeg";
import hackathonWin2 from "../assets/HackathonWin2.jpeg";
import hackathonWin3 from "../assets/HackathonWin3.jpeg";
import mockParliament from "../assets/MockParliament.jpeg";
import felecitation from "../assets/Felecitation during the parents meet for been class topper.jpeg";

const AwardsGallery = () => {
  /* ⭐ Add your images here */
  const photos = [
    {
      url: hsc5,
      caption: "Honored to receive an award from Honorable Nitin Dada Kolhe Saheb for achieving the First Position in HSC.",
    },
    {
      url: mock,
      caption: "Receiving the Consolation Prize in the Mock Placement Premier League held at Sanjivani College of Engineering, Kopargaon — awarded by our Honorable Director Sir.",
    },
    {
      url: rangoli,
      caption: "Secured the Third Position in the Rangoli Competition held in the ECE Department",
    },
    {
      url: secondyear,
      caption: "Honored with the Academic Excellence Award for exceptional results in the Second Year of Engineering",
    },
    {
      url: thirdyear,
      caption: "Awarded the Academic Excellence Award for maintaining high academic performance in the Third Year of Engineering.",
    },
    {
      url: xyz,
      caption: "A special captured moment",
    },
    {
      url: firstyear,
      caption: "Received the Academic Excellence Award for outstanding performance in the First Year of Engineering",
    },
    {
      url: hsc1,
      caption: "Secured the award by the hands of Hon. Satyajit Tambe Sir — a very proud moment for me and my parents.",
    },
    {
      url: hsc2,
      caption: "Received the award for securing First Position in HSC, presented by Hon. Ashutosh Kale Sir and Hon. Ankush Chaudhari Sir.",
    },
    {
      url: hsc3,
      caption: "Dedicated preparation during HSC days.",
    },
    {
      url: hsc4,
      caption: "Achievements that shaped my academic foundation.",
    },
    {
      url: hackathonWin,
      caption: "Celebrating a memorable hackathon victory - innovating and building solutions under pressure.",
    },
    {
      url: hackathonWin2,
      caption: "Proud moment winning the hackathon championship with an exceptional technical solution.",
    },
    {
      url: hackathonWin3,
      caption: "Hackathon success - showcasing our innovative project and dedication to problem-solving.",
    },
    {
      url: mockParliament,
      caption: "Participated in the Mock Parliament event, representing leadership and analytical thinking.",
    },
    {
      url: felecitation,
      caption: "Felicitated during the parents meet for achieving class topper status - a proud achievement for my family and me.",
    },
  ];

  const [index, setIndex] = useState(0);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [photos.length]);

  const nextSlide = () => setIndex((index + 1) % photos.length);
  const prevSlide = () =>
    setIndex((index - 1 + photos.length) % photos.length);

  return (
    <section className="py-24 bg-transparent" id="gallery">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">Moments of Pride</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-12">
          A collection of achievements, milestones, and memorable moments that showcase growth and dedication
        </p>

        {/* Carousel Container */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -40 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full flex items-center justify-center"
            >
              <div className="relative w-full max-w-3xl">
                <div className="relative shadow-2xl rounded-3xl overflow-hidden">
                  
                  {/* ⭐ Image */}
                  <motion.img
                    src={photos[index].url}
                    alt="achievement"
                    className="w-full h-[500px] object-cover rounded-3xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Frame Border */}
                  <div className="absolute inset-0 border-[3px] border-white/10 rounded-3xl"></div>

                  {/* ⭐ Caption */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-0 w-full bg-black/50 backdrop-blur-xl p-5 text-white text-lg font-medium rounded-b-3xl"
                  >
                    {photos[index].caption}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ⭐ Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full hover:bg-black/60 backdrop-blur-md"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-3 rounded-full hover:bg-black/60 backdrop-blur-md"
          >
            ❯
          </button>
        </div>

        {/* ⭐ Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {photos.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index
                  ? "bg-purple-500 scale-125 shadow-lg"
                  : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsGallery;
