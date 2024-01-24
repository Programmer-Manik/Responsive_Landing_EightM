import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type tContainerProps = {
   children:ReactNode
   className?:string
}

const Container = ({children,className}:tContainerProps) => {
   return (
      <div className={cn("w-full max-w-[1220px] mx-auto px-[20px] ", className)}>
         {children}
      </div>
   );
};

export default Container;