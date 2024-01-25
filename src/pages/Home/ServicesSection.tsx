import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsSetReplacement from "@/components/ServiceTiles/ChipsSetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>Services that we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-2">
          All our technicians are fully qualified and licensed Moreover, theyare
          incredibly skillful and proficient in various aspects of computer
          repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
         <BatteryReplacement/>
         <ChipsSetReplacement/>
         <DataRecovery/>
         <div className="bg-red-200 h-[415px] rounded-2xl col-span-12"></div>
         <div className="bg-red-200 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
         <div className="bg-red-200 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
         <div className="bg-red-200 h-[415px] rounded-2xl col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
