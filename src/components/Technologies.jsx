
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion"
import { SiCanva } from "react-icons/si";
import { SiWondersharefilmora } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl my-20">Technologies</motion.h2>


      <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-amber-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <FaJava className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <FaNode className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <SiExpress className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-800" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <SiCanva className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <SiWondersharefilmora className="text-7xl text-green-800" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"

          className="border-4 rounded-2xl border-neutral-800 p-4">
          <SiAdobepremierepro className="text-7xl text-blue-800" />
        </motion.div>

      </div>
    </div>
  )
}

export default Technologies
