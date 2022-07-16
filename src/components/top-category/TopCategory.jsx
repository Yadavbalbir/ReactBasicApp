import React from 'react'
import "./topcategory.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faListNumeric, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

function TopCategory() {
  return (
     <div className="py-3" id="custom-cards">
    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-2 mt-2 mb-4 lh-1 fw-bold">Short title, long jacket</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <button type="button" class="btn btn-primary">View</button>
              </li>  
              <li className="d-flex align-items-center">
                <FontAwesomeIcon icon={faThumbsUp} />
                <small className='px-2'>999</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-2 mt-2 mb-4 lh-1 fw-bold">Much longer title that...</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <button type="button" class="btn btn-primary">View</button>
              </li>
             
              <li className="d-flex align-items-center">
                <FontAwesomeIcon icon={faThumbsUp} />
                <small className='px-2'>1024</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-2 mt-2 mb-4 lh-1 fw-bold">Much longer title that wraps</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <button type="button" class="btn btn-primary">View</button>
              </li>
             
              <li className="d-flex align-items-center">
                <FontAwesomeIcon icon={faThumbsUp} />
                <small className='px-2'>1024</small>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg">
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 className="pt-2 mt-2 mb-4  lh-1 fw-bold">Category-1</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <button type="button" class="btn btn-primary">View</button>
              </li>
              
              <li className="d-flex align-items-center">
                <FontAwesomeIcon icon={faThumbsUp} />
                <small className='px-2'>765</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopCategory