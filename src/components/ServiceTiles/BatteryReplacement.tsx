import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion,  } from "framer-motion";

const BatteryReplacement = () => {
const {refComponent,style} = useScrollGrow(); 

  return (
    <motion.div
      style={style}
      ref={refComponent}
      className="bg-red-200 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
