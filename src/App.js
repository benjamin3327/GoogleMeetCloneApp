import "./styles/styles.css";
import "./styles/tailwind.css";
import {
  useHMSActions,
  useHMSStore,
  selectIsConnectedToRoom
} from "@100mslive/react-sdk";
//import Preview from "./components/Preview";
import Room from "./components/Room";
import Home from "./components/UserInterface/home";
import './styles/uiStyle.css';
import fetchToken from "./components/fetchToken";

const App = () => {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const handleSubmit = async (userName) => {
    const token = await fetchToken(userName);
    hmsActions.join({ authToken: token, userName });
  };

  return (
    <>{isConnected ? <Room /> : <Home handleSubmit={handleSubmit} />}</>
  );
};

export default App;
