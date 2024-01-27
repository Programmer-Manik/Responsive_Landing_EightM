// axios error handling

import  axios  from "axios";
export const getServices = async () => {
  return  await axios.get("http://localhost:5000/api/v1/services")
};


//TanStack Query DevTools error handling

// export const getServices = async () => {
//   const res = await fetch("http://localhost:5000/api/v1/services").then(
//     (res) => res.json()
//   );
//   if (!res.services) {
//     throw new Error("Something went wrong");
//   }

//   return res;
// };