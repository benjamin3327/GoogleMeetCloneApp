/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';

import '../../styles/uiStyle.css';
import './container.css';

import { useHMSActions} from '@100mslive/react-sdk';
import fetchToken from "../fetchToken";

const JoinRoom = () => {
    const hmsActions = useHMSActions();
    const [userName, setUserName] = useState("");

    const handleSubmit = async (userName) => {
        const token = await fetchToken(userName);
        hmsActions.join({ 
        userName,
        authToken: token
        });
    };

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <h1 style={{
                            fontWeight: 'bolder', 
                            lineHeight: 2.5,
                            fontSize: 32,
                            fontFamily: 'Arial'}}>Premium video meetings. <br /> Now free for everyone. </h1>
                    <p>
                        We re-engineered the service we built for secure business meetingd, Google Meets, to make it free
                        and available for all.
                    </p>

                    <div className="form-container">
                        <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit(userName);
                            }} 
                            className="input-group">

                            <button className="btn">
                                Create Room 
                            </button>

                            <input 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                name="userName"
                                className="form-control"
                                placeholder="Enter Room Name"
                                required
                             />
                        </form>
                    </div>
                    <hr />
                    <p>
                        <a href="" style={{fontSize: 18, fontWeight: 900}}>Learn more</a> about Google Meet
                    </p>
                </div>
                <div className="col-lg-6 C9bDzc">
                    <img className="Y8gQSd BUooTd"
                        src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
                        alt="Get a link you can share" role="img" data-atf="true" data-iml="8638.40000000596" />

                    <div className="text-center">
                        <h3 style={{fontWeight: 900, fontSize:20}}>Get a link you can share</h3>
                        <p style={{fontSize: 18,fontWeight:500}}>Click <b style={{fontWeight: 900, color:'#08630f'}}> Create Room</b> to
                            get link you can send to people you want to meet with</p>
                    </div>
                </div>
            </div>
         </div>
    );
}
export default JoinRoom;