import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const {mutateAsync, isError , isSuccess} = useMutation({
   mutationFn: async(data) => {
      return await fetch('http//localhost:5000/api/v1/services', {
         method:'POST',
         body: JSON.stringify(data),
         headers:{
            'Content-Type' : 'application/json'
         },
      });
   },
  });
  console.log({isError,isSuccess})
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
