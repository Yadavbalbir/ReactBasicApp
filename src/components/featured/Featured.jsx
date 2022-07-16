import React from 'react'
import "./featured.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import{faListNumeric, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

function Featured() {
  return (
    <div className="container px-4 py-3" id="custom-cards">

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-2 mt-2 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <button type="button" class="btn btn-primary">View</button>
              </li>
              <li className="d-flex align-items-center me-3">
                <FontAwesomeIcon icon={faListNumeric} />
                <small className='px-2'>Earth</small>
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
            <h2 className="pt-2 mt-2 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <button type="button" class="btn btn-primary">View</button>
              </li>
              <li className="d-flex align-items-center me-3">
                <FontAwesomeIcon icon={faListNumeric} />
                <small className='px-2'>Remote</small>
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
            <h2 className="pt-2 mt-2 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <button type="button" class="btn btn-primary">View</button>
              </li>
              <li className="d-flex align-items-center me-3">
                <FontAwesomeIcon icon={faListNumeric} />
                <small className='px-2'>California</small>
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

export default Featured