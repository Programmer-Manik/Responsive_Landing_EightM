import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import MacBook from "@/assets/images/MacBook.jpg";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 30,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold 
        text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="max-w-[50ch] text-lg mt-10 mb-5 text-dark-gray "
            variants={introChildren}
          >
            Welcome to{""}{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>
            {""}, your one-stop place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold">
              MacBook repairs
            </span>
            {""} and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a Service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 w-3/7 lg:w-full  mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img
            className="w-[90%] rounded-3xl  h-[95%] object-contain"
            src={MacBook}
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
