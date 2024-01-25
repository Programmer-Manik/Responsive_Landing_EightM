import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const ChipsSetReplacement = () => {
   const {refComponent,style} = useScrollGrow();
   return (
      <motion.div style={style} ref={refComponent}  className="bg-red-200 h-[415px] rounded-2xl col-span-6 lg:col-span-5"></motion.div>
   );
};

export default ChipsSetReplacement;