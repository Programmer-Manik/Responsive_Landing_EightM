
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


  const info = useQuery({
    queryKey:["services"],
    queryFn:(() => {
      return fetch("http://localhost:5000/api/v1/services")
    })
})
console.log(info)


  return (
    <div>
      <h2>Welcome to the ServiceList page</h2>
    </div>
  );
};
export default ServiceList;
