import React from 'react';
import '../../styles/uiStyle.css';
import './navBar.css';

const NavBar = () => {
    const currentTime = new Date();
    const Day = {
        date: currentTime.getDate(),
        month: currentTime.getMonth(),
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        ampm: currentTime.getHours() >= 12 ? 'pm' : 'am',
        datePrefix: currentTime.getDate() >=4 ? 'th' : 'rd'
    };
    
    return(
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="https://google.com">
                        <img className="gb_xc"
                            src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
                            srcSet="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png 1x, https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png 2x"
                            alt="Google Meet logo" aria-hidden="true" data-iml="1243.5999999940395"
                            data-atf="true" />
                    </a>
                </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="https://google.com" id="time_date"> 
                        {Day.hours === 0 ? 12 : Day.hours > 12 ? Day.hours - 12: Day.hours}: 
                        {Day.minutes > 9 ? Day.minutes : `0${Day.minutes}`} {Day.ampm} -</a>
                    </li>
                    <li>
                        <a href="https://google.com" id="time_date">
                            {Day.month} {Day.date}{Day.datePrefix}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;