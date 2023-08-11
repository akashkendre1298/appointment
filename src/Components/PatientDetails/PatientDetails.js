import React, { useState } from 'react';
import "./PatientDetails.css"


const PatientDetails = () => {
    const [doctor, setDoctor] = useState('');
    const [channel, setChannel] = useState('');
    const [title, setTitle] = useState('');
    const [patientName, setPatientName] = useState('');
    const [patientId, setPatientId] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [appointmentType, setAppointmentType] = useState('');
    const [bp, setBp] = useState('');
    const [temp, setTemp] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [spo2, setSpo2] = useState('');
    const [pulseRate, setPulseRate] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
    };

    const handleReset = () => {
        // Reset all form fields
    };

    return (
        <div className="appointment-form">

            <div className="first-section-right-side">
                <div className=" input-section">
                    <p className='title-margin title-clr'>Details</p>
                    <div className="input-group">
                        <select value={doctor} onChange={(e) => setDoctor(e.target.value)} className='select-clr'>
                            <option value="">Select Doctor</option>
                            <option value="dr-john">Dr. John Doe</option>
                            <option value="dr-jane">Dr. Jane Smith</option>
                            <option value="dr-mary">Dr. Mary Johnson</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <select value={channel} onChange={(e) => setChannel(e.target.value)} className='select-clr'>
                            <option value="">Select Channel</option>
                            <option value="in-person">In-Person</option>
                            <option value="video">Video Call</option>
                            <option value="phone">Phone Call</option>
                        </select>

                    </div>
                    <div >
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Appointment Title"
                            className="input-group-appointment-title"
                        />
                    </div>
                </div>

                <div className=" flex-input-section">
                    <p className='title-margin title-clr'>Appointment Details</p>
                    <div className="patient-name-id">
                        <div className="patient-name-right-side">
                            <p className='select-clr'>Ravi Patil</p>
                        </div>
                        <div className="patient-name-right-side">
                            <p className='select-clr'>PID: 123</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="date-time-flex">

                            <div >
                                <select value={channel} onChange={(e) => setChannel(e.target.value)} className="flex-input-group-time select-clr ">
                                    <option value="">Time</option>
                                    <option value="10 AM">10 AM</option>
                                    <option value="12 PM">12 PM</option>
                                    <option value="03 PM">03 PM</option>
                                </select>
                            </div>
                            <div className="flex-input-group">
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder="Date"
                                    className='select-clr' />
                            </div>
                        </div>
                        <div className="input-group">
                            <select value={channel} onChange={(e) => setChannel(e.target.value)} className='select-clr'>
                                <option value="">Select Appointment Type</option>
                                <option value="in-person">In-Person</option>
                                <option value="video">Video Call</option>
                                <option value="phone">Phone Call</option>
                            </select>

                        </div>

                    </div>
                </div>
            </div>
            <hr />
            <p className='title-clr'>Vital Information</p>
            <div className="section vital-info-section">
                <div className="vital-input-group">
                    <input
                        type="text"
                        className="vital-input"
                        value={bp}
                        onChange={(e) => setBp(e.target.value)}
                        placeholder="BP"
                    />
                </div>
                <div className="vital-input-group">
                    <input
                        type="text"
                        className="vital-input"
                        value={temp}
                        onChange={(e) => setTemp(e.target.value)}
                        placeholder="Temp"
                    />
                </div>

                <div className="vital-input-group">
                    <input
                        type="text"
                        className="vital-input"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Height"
                    />
                </div>
                <div className="vital-input-group">
                    <input
                        type="text"
                        className="vital-input"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Weight"
                    />
                </div>
                <div className="vital-input-group">
                    <input
                        type="text"
                        className="vital-input"
                        value={spo2}
                        onChange={(e) => setSpo2(e.target.value)}
                        placeholder="SpO2"
                    />
                </div>
                <div className="vital-input-group">
                    <input
                        type="text"
                        className="vital-input"
                        value={pulseRate}
                        onChange={(e) => setPulseRate(e.target.value)}
                        placeholder="Pulse Rate"
                    />
                </div>


            </div>
            <div className="reason-note-for-doc">
                <div className="vital-input-group">
                    <input
                        type="text"
                        className="vital-input-reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Reason"
                    />
                </div>
                <div className="input-group vital-input-reason">
                    <select value={channel} onChange={(e) => setChannel(e.target.value)} className='select-clr'>
                        <option value="">Note For Doctor</option>
                        <option value="in-person">In-Person</option>
                        <option value="video">Video Call</option>
                        <option value="phone">Phone Call</option>
                    </select>

                </div>
            </div>

            <div className="section button-group">
                <button type="button" onClick={handleReset} >Reset</button>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default PatientDetails;
