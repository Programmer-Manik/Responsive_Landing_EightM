import { getServices } from "@/api/admin/services/services";
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
const ServiceList = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState([])
  // const [error, setError] = useState([])
  // console.log(data);
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/services")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.data));
  // }, []);

  
  
  const { isLoading, data, } = useQuery({
    queryKey: ["services"],
    queryFn:getServices 
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <h2>Welcome to the ServiceList page</h2>
      {data.data.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
};
export default ServiceList;
