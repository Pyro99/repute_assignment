// import Header from "./components/Header";
// import CardContainer from "./components/CardContainer";
// import ChatBox from "./components/ChatBox";
import { Provider } from "react-redux";
import Chats from "./components/Chats";
import store from "./utils/store";

const App = () => {
  return (
  <Provider store ={store}>
    {/* <Header />
    <CardContainer /> */}
    {/* <ChatBox /> */}
    <Chats />
    
  </Provider>
  )
};

export default App
