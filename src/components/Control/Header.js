import React from 'react';
import Logo from "../../assets/menu.jpeg";
import Search from "../../assets/search.png";
import User from "../../assets/user.png";
import Avatar from "../../assets/avatar.webp";

const Header = () => {

  return (
    <div className="fixed top-0 h-10 w-screen flex justify-between items-center px-2">
      <div className="flex mr-1 ml-5 mt-10">
        <img className="gb_xc" style={{width:124,height:40}}
             src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
             srcSet="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png 1x, https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png 2x"
             alt="Google Meet logo" aria-hidden="true" data-iml="1243.5999999940395"
             data-atf="true"
        />
      </div>

      <div className="flex w-50 space-around m-30 mt-10">
        <button className="btn flex" style={{ 
            backgroundColor: '#1a73e8', 
            color: '#fff', 
            fontSize: 10,
            fontWeight: 800,
            width: '50%',
            }}>Invite <img src={User} alt="top" className="image w-5 ml-3 "/>
        </button>
     
        <button className="btn font-bold text-xs text-white p-2 ml-2 mr-2" >Log In</button>
        <img src={Avatar} alt="top" className="image h-10 w-10 mt-0 mr-5"/>
      </div>
    </div>
  );
};

export default Header;