import React from "react";
import VideoTile from "./VideoTile";
import {
  useHMSStore,
  selectLocalPeer,
  selectPeers
} from "@100mslive/react-sdk";
import ControlBar from "./Control/ControlBar";
import Header from "./Control/Header";

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const peers = useHMSStore(selectPeers);
  return (
    <div>
    <Header />
    
    <div className="flex flex-col mt-20">
      <div className="flex bg-gray-900 w-screen min-h-screen p-2 flex-wrap">
        {localPeer && <VideoTile peer={localPeer} isLocal={true} />}
        {peers &&
          peers
            .filter((peer) => !peer.isLocal)
            .map((peer) => {
              return (
                <>
                  <VideoTile isLocal={false} peer={peer} />
                </>
              );
            })}
      </div>
      <ControlBar />
    </div>
    </div>
  );
};

export default Room;
