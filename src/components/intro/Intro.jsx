import React, { useState } from "react";
import "./intro.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBarChart, faClipboard, faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';



function Intro() {

    const [openStipend, setOpenStipend] = useState(false);
    const [options, setOptions] = useState({
        ispaid: "paid"
    });

    const [openIndustry, setOpenIndustry] = useState(false);
    const [Industry, setIndustry] = useState({
        Industry: "EdTech"
    })

    const handleOption = (name) =>{
        setOptions((prev)=>{
            return {
                ... prev,
                ispaid : name
            }
        })
    }

    const handleIndustry = (name)=>{
        setIndustry((prev)=>{
            return {
                ... prev,
                Industry: name
            }
        })
    }


  return (
    <div>
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://i.ibb.co/WWtRVR8/4153553-removebg-preview.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Welcome to Startup Portal of IIT Bombay</h1>
        <p className="lead text-warning">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-info btn-lg px-4 me-md-2">Login</button>
          <button type="button" className="btn btn-outline-light btn-lg px-4">Register</button>
        </div>
      </div>
    </div>
    <div className='headerSearch'>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBarChart} className="headerIcon" />
                <input type="text" placeholder='What are you looking?' className='headerSearchInput' />
            </div>

             <div onClick={()=>setOpenStipend(!openStipend)} className="headerSearchItem">
                <FontAwesomeIcon icon={faMoneyBill1} className="headerIcon" />
                <span  type="text" className='headerSearchInput'>{`${options.ispaid} Internship`}</span>
                {openStipend && <div className="options">
                    <div className="optionItem">
                        <span onClick={()=>handleOption("Paid")} className="optionText">Paid</span>
                    </div>
                    <div className="optionItem">
                        <span onClick={()=>handleOption("Unpaid")} className="optionText">Unpaid</span>
                    </div>
                </div>}
            </div>

             <div onClick={()=>setOpenIndustry(!openIndustry)} className="headerSearchItem">
                <FontAwesomeIcon icon={faClipboard} className="headerIcon" />
                <span type="text" className='headerSearchInput'>{`${Industry.Industry} Company`}</span>

                 {openIndustry && <div className="Industry">
                    <div className="IndustryItem">
                        <span onClick={()=>handleIndustry("Web dev")} className="optionText">Web dev</span>
                    </div>
                    <div className="IndustryItem">
                        <span onClick={()=>handleIndustry("App dev")} className="optionText">App Dev</span>
                    </div>

                    <div className="IndustryItem">
                        <span onClick={()=>handleIndustry("Consulting")} className="optionText">Consulting</span>
                    </div>

                    <div className="IndustryItem">
                        <span onClick={()=>handleIndustry("Finance")} className="optionText">Finance</span>
                    </div>

                    <div className="IndustryItem">
                        <span onClick={()=>handleIndustry("Marketing")} className="optionText">Marketing</span>
                    </div>

                    <div className="IndustryItem">
                        <span onClick={()=>handleIndustry("Analyst")} className="optionText">Analyst</span>
                    </div>

                    <div className="IndustryItem">
                        <span onClick={()=>handleIndustry("Data Science")} className="optionText">Data Science</span>
                    </div>
                </div>}
            </div>

            <div className="headerSearchItem">
                <button type="button" className='btn btn-primary'>Search</button>
            </div>
        </div>
  </div>
  </div>
  )
}

export default Intro;