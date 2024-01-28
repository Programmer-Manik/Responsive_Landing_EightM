/* eslint-disable react-hooks/rules-of-hooks */

import { useGetServices } from "@/api/admin/services/services.hook";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { FormEvent, useState } from "react";

const ServiceList = () => {
 
const {
  data: services,isLoading,isError,} = useGetServices();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>SomeThing error...</span>;
  }


// post method function down 
const [serviceName, setServiceName] = useState("");
  const queryClient = useQueryClient()
const {mutateAsync, isError:postError , isSuccess} = useMutation({
   mutationFn: async(data) => {
      return await fetch('http//localhost:5000/api/v1/services', {
         method:'POST',
         body: JSON.stringify(data),
         headers:{
            'Content-Type' : 'application/json'
         },
      });
   },
   onSuccess:() => {
    queryClient.invalidateQueries({queryKey:['services']});
   }
  });
  console.log({postError,isSuccess})
  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    const serviceData = {
      name:serviceName,
      description:'Replace any dead chips',
      devices:['MackBook pro','MacKBook air', 'iPad pro'],
      price:500.0,
    }
   console.log(serviceData);
   await mutateAsync(serviceData);
   console.log('done')
  };

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
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
    </Container>
  );
};
export default ServiceList;
