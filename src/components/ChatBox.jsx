import { AccountCircle, CancelPresentation } from "@mui/icons-material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../utils/textSlice";
import { removeChatBox } from "../utils/chatSlice";
import { randomMessageGenerator } from "../utils/helper";

const ChatBox = ({number}) => {
    const [text,setText] = useState("");

    const dispatch = useDispatch();
    const messages = useSelector(store => store.text);

    return (
    <div className ='min-h-[600px] w-72 bg-gray-400 mr-4 flex flex-col justify-between rounded-tl-2xl'>
        <div className ="flex justify-between px-2 bg-gray-800 text-white rounded-tl-2xl py-1">
            <p>Lorem Ipsum</p>
            <button onClick = {()=> dispatch(removeChatBox(number - 1))}><CancelPresentation /></button>
        </div>
        <div className="h-[400px] overflow-auto"> 
        {messages && messages.map(message => (
            <div key ={randomMessageGenerator(3)}>
            <div className="flex gap-2 p-2">
            {message && <AccountCircle /> }
            <p>{message}</p>
            </div>
            {message &&  <div className="flex gap-2 p-2 justify-end">
            <AccountCircle /> 
            <p>{"Lorem Ipsum Doler Set"}</p> 
            </div>
            }
            </div>
        ))}
        </div>
        <div className="flex justify-between px-2 py-2">
            <div className="flex flex-grow">
            <textarea
            value={text}
            rows="3"
            className="bg-transparent outline-none px-3 border border-black p-2 text-black" 
            type="text" 
            onChange={(e) => setText(e.target.value)}
            placeholder='Write a message...' />
            </div>
            <button onClick={() => {dispatch(sendMessage(text))
            setText("")
            }}>Send</button>
        </div>   
    </div>
  )
}

export default ChatBox