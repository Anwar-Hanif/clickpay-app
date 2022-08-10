import React, { useContext, useState } from 'react'
import CityContext from '../City';

const EditCityModal = (CityContext) => {
  const value = useContext(CityContext);
  console.log({ value });
  
  const EditCityHandler = (e) => {
      e.preventDefault();
   
      
    }
    return (
        <div className="modal fade" id="edit_city_modal" tabIndex={'-1'} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit City</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={EditCityHandler}>
                <div className='mb-3'>
                  <input type={'text'} className='form-control' name="" placeholder='Enter City' />
                </div>
                <div className='mb-3'>
                  <button className='btn cp_main_btn'>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}
export default EditCityModal;

