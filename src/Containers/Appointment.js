import React from 'react'
import { FaSearch } from 'react-icons/fa';

import "./Appointment.css"
import TableWithPagination from '../Components/EntryTable/EntryTable';
import PatientDetails from '../Components/PatientDetails/PatientDetails';

const Appointment = () => {
    const avatarStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'cover',
    };
    return (
        <>

            <div className="main-div-for-appointment">

                <div className="width-div">
                    <div className="left-side-div">
                        <div className="search-view-profile">
                            <div className="search-box">
                                <div className="search-icon">
                                    <FaSearch />
                                </div>
                                <input type="text" placeholder="Search by Name/Mobile Number" />

                            </div>
                            <div >
                                <button className="btn-in-left-side">View Profile</button>
                            </div>
                        </div>
                        <div className="">
                            <TableWithPagination />
                            <div className=""></div>
                        </div>
                        <div className="">
                            <p className="title-clr">Profile Details</p>
                            <div className="">
                                <div className="Profile-Details">

                                    <div className="left-img-name-div">
                                        <div className="">
                                            <div>

                                                <img
                                                    src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                                                    alt="User Avatar"
                                                    style={avatarStyle}
                                                />
                                            </div>
                                        </div>
                                        <div className="patient-name">Ravi Patil</div>
                                    </div>
                                    <div className="loc-cont">
                                        <p>Location:    NA</p>
                                        <p>Contact:             7666537279</p>
                                        <p>Email Id:        NA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Right-side-div">
                        <PatientDetails />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Appointment
