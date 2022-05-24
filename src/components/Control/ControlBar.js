import React from "react";
import Mute from "../../assets/mute.png";
import Unmute from "../../assets/unmute.png";
import Video from "../../assets/video.png";
import muteVideo from "../../assets/muteVideo.png";
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectIsLocalScreenShared
} from "@100mslive/react-sdk";

const ControlBar = () => {
  const hmsActions = useHMSActions();
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);

  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
  };
  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled);
  };
  const toggleScreen = async () => {
    await hmsActions.setScreenShareEnabled(!isLocalScreenShared);
  }

  return (
    <div className="fixed bottom-0 h-10 bg-gray-400 w-screen flex items-center justify-center">
      <button
        className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500 mr-2"
        onClick={toggleAudio}
      >
        {isLocalAudioEnabled ? (
            <img src={Unmute} alt="mute" className="image h-5 w-5 rounded-lg" />
          ) : (
            <img src={Mute} alt="unmute" className="image h-5 w-5 bg-gray-900 rounded-lg" />
        )}

      </button>
      <button
        className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500"
        onClick={toggleVideo}
      >
        {isLocalVideoEnabled ? (
            <img src={muteVideo} alt="mute" className="image h-5 w-5 rounded-lg" />
          ) : (
            <img src={Video} alt="unmute" className="image h-5 w-5 bg-gray-900 rounded-lg" />
        )}
      </button>
      <button
        className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500 mr-2"
        onClick={toggleScreen}
      >
      {isLocalScreenShared ? "Unshare" : "Share"}
      </button>

      <button
        className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-iwhite ml-2 bg-red-600"
        onClick={() => {
          hmsActions.endRoom(false, "reason") && hmsActions.leave();
        }}
      >End</button>
    </div>
  );
};

export default ControlBar;
