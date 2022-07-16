import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBullhorn, faChartLine, faChartSimple, faLaptopCode, faListNumeric, faMobile, faMoneyCheck, faUserTie } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='container'>
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faListNumeric} />
                <span>All Jobs</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon icon={faLaptopCode} />
                <span>Web Dev</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon icon={faMobile} />
                <span>App Dev</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon  icon={faUserTie} />
                <span>Consulting</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon  icon={faMoneyCheck} />
                <span>Finance</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon  icon={faBullhorn} />
                <span>Marketing</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon  icon={faChartLine} />
                <span>Analyst</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon  icon={faChartSimple} />
                <span>Data Science</span>
            </div>

        </div>
 
    </div>
  )
}

export default Header;