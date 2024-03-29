import { useQuery } from "@tanstack/react-query";
import { getServices } from "./services";

export const useGetServices = () => {
   const servicesData = useQuery({
      queryKey: ["services"],
      queryFn: getServices,
      select: (data) => {
        const services = data.data.map((items) => ({
          id: items._d,
          name: items.name,
          description: items.description,
          price: items.price,
        }));
        return services;
      },
      // gcTime: 1000 * 60 * 5,
      // staleTime:3000,
      // staleTime:Infinity
    });

    return servicesData
}