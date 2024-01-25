import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BatteryReplacement = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  const scaleValues = useTransform(scrollYProgress,[0, 1], [0.9, 1])
  const opacityValues = useTransform(scrollYProgress,[0, 1], [0.1, 1])
  const XValues = useTransform(scrollYProgress,[0, 1], [-1000, 0])
  return (
    <motion.div
    style={{
      scale:scaleValues,
      opacity:opacityValues,
      x:XValues,
   }}
      ref={ref}
      className="bg-red-200 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
