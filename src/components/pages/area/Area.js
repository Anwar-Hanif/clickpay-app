import React from 'react'
import City from '../area/City'
import Locality from '../area/Locality'
import Sublocality from '../area/SubLocality'
const Area = () => {
  return (
    <>
        <div className="row">
            <div className="col-lg-12">
                <div className="dash_ca_heading">
                    <h2>Area</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className='cp_area_tab'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="cp_tb1-tab" data-bs-toggle="tab" data-bs-target="#cp_tb1-tab-pane" type="button" role="tab" aria-controls="cp_tb1-tab-pane" aria-selected="true">City</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="cp_tb2-tab" data-bs-toggle="tab" data-bs-target="#cp_tb2-tab-pane" type="button" role="tab" aria-controls="cp_tb2-tab-pane" aria-selected="false">Locality</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="cp_tb3-tab" data-bs-toggle="tab" data-bs-target="#cp_tb3-tab-pane" type="button" role="tab" aria-controls="cp_tb3-tab-pane" aria-selected="false">Sub Locality</button>
                        </li>
                    </ul>
                    <div className="tab-content p-3 border border-top-0" id="myTabContent">
                          <div className="tab-pane fade show active" id="cp_tb1-tab-pane" role="tabpanel" aria-labelledby="cp_tb1-tab" tabIndex="0">
                            <City/>
                        </div>
                          <div className="tab-pane fade" id="cp_tb2-tab-pane" role="tabpanel" aria-labelledby="cp_tb2-tab" tabIndex="0">
                            <Locality/>
                        </div>
                          <div className="tab-pane fade" id="cp_tb3-tab-pane" role="tabpanel" aria-labelledby="cp_tb3-tab" tabIndex="0">
                            <Sublocality/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Area