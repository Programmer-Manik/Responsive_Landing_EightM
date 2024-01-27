import { getServices } from "@/api/admin/services/services";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";

const ServiceList = () => {
  const {
    data: services,
    isLoading,
    isError,
  } = useQuery({
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
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>SomeThing error...</span>;
  }

  return (
    <Container className="mt-20 border p-3 rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" className="p-2"><Trash2/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total services</TableCell>
            <TableCell className="text-right">services.length</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};
export default ServiceList;
