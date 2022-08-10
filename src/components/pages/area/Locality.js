import React from "react";

const Locality = () => {
 return(
    <>
       <button className='btn cp_main_btn mb-3'><span className='me-2'><i className='fa fa-plus'></i></span> Add New</button>
       <table id="locality_table" className="table table-striped table-bordered">
          <thead>
             <tr>
                <th>ID</th>
                <th>City</th>
                <th>Locality</th>
                <th className="text-end">Action</th>
             </tr>
          </thead>
          <tbody>
             <tr>
                <td>1</td>
                <td>Karachi</td>
                <td>Mehmoodabad</td>
                <td className="text-end"><button className="btn btn-sm btn-primary"><i className='fa fa-pencil'></i></button></td>
             </tr>
          </tbody>
          <tfoot>
             <tr>
                <th>ID</th>
                <th>City</th>
                <th>Locality</th>
                <th className="text-end">Action</th>
             </tr>
          </tfoot>
       </table></>
 )

}

export default Locality;