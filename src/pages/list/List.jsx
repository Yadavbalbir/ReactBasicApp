import React from 'react'
import "./list.css"
import Header from '../../components/header/Header';
import Navbar from "../../components/navbar/Navbar";


 const List = () => {
  return (
    <div>
      <Navbar/>
      <div className="header mb-3">
            <Header/>
      </div>
      
      <div className="searchResult">
        <div className="wrapper">
            <div className="row rowgap pt-5">
              <div className="col-md-3 bg-warning search">
                    <h1>Search</h1>
              </div>

              <div className="col-md-8 p-2">
                    <div class="card mb-3">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="https://i.ibb.co/7zcDfBF/20943565.jpg" class="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div class="col-md-5">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                          <div className="col-md-2 mt-5 ">
                            <button className="btn btn-primary my-2">View</button>
                            <button className="btn btn-warning">Apply</button>
                          </div>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="https://i.ibb.co/7zcDfBF/20943565.jpg" class="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div class="col-md-5">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                          <div className="col-md-2 mt-5 ">
                            <button className="btn btn-primary my-2">View</button>
                            <button className="btn btn-warning">Apply</button>
                          </div>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="https://i.ibb.co/7zcDfBF/20943565.jpg" class="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div class="col-md-5">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                          <div className="col-md-2 mt-5 ">
                            <button className="btn btn-primary my-2">View</button>
                            <button className="btn btn-warning">Apply</button>
                          </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default List;