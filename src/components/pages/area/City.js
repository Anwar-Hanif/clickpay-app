import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import EditCityModal from "./modals/EditCityModal";
const CityContext = createContext();

const City = () => {
   
   const  EditItem = (item) => {
      const value = item.id;
      return (
         <CityContext.Provider value={value}>
            <EditCityModal />
         </CityContext.Provider>
      )
      // console.log(value);
      
   }

   const cityApi ="http://192.168.100.14:8080/api/v1/area/city";

   const [data, setData] = useState([]);

   const accessToken = localStorage.getItem('accessToken');
   
   
const getData = () => {
   axios.get(cityApi,
      {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken,
            "Accept": 'application/json'
         }
      }

   ).then((resp) => {
      const data = resp.data.data;
      setData(data);
   });
}
   useEffect(() => {
      setTimeout(() => {
         getData([data]);

      }, 2000);
   }, []);


   // useEffect(() => getData(), []);
  
  

 return(
   <>
       <button className='btn cp_main_btn mb-3' type="button" data-bs-toggle="modal" data-bs-target="#add_city_modal"><span className='me-2'><i className='fa fa-plus'></i></span> Add New</button>
       <table id="city_table" className="table table-striped table-bordered">
          <thead>
             <tr>
                <th>Sno.</th>
                <th>City</th>
                <th className="text-end">Action</th>
             </tr>
          </thead>
               <tbody>
             {
                data.map((item, i) => (
                  <tr key={item.id}>
                     <td>{i+=1}</td>
                     <td>{item.name}</td>
                      <td className="text-end"><button className="btn btn-sm btn-primary" onClick={(e) => EditItem(item)} type="button" data-bs-toggle="modal" data-bs-target="#edit_city_modal"><i className='fa fa-pencil'></i></button></td>
                  </tr>
                ))
             }
               </tbody>
            
          <tfoot>
             <tr>
                <th>ID</th>
                <th>City</th>
                <th className="text-end">Action</th>
             </tr>
          </tfoot>
       </table>
   </>
 )

}

export default City;
export { CityContext };
