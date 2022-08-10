import React, { useState } from 'react'
import axios from 'axios';


const AddCityModal = () => {

  const [details, setDetails] = useState({ city: "" });

  const accessToken = localStorage.getItem('accessToken');
  const addCityHandler = (e) => {
    // e.preventDefault();
    let city = details.city;

    const apiUrl = 'http://192.168.100.14:8080/api/v1/area/city';

    axios.post(apiUrl, {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken,
          "Accept": 'application/json'
        },
        params: {
          cityName: city

        }
      }

    ).then(function (response) {
      const myCity = response.data;
      console.log(myCity);

    })
  }
  return (
    <div className="modal fade" id="add_city_modal" tabIndex={'-1'} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add New City</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={addCityHandler}>
                <div className='mb-3'>
                  <input type={'text'} value={details.city} onChange={e => setDetails({ ...details, city: e.target.value })} className='form-control' name="" placeholder='Enter City' />
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
export default AddCityModal;

