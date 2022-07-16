import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faListNumeric, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

function TopBlog() {
  return (
     <div className="py-3" id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-2">
              <div className="col bg-gradient">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="https://i.ibb.co/7zcDfBF/20943565.jpg" className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <button className="btn btn-info">Read more</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="https://i.ibb.co/7zcDfBF/20943565.jpg" className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <button className="btn btn-warning">Read more</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
      </div>
  )
}

export default TopBlog