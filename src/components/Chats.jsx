import { AccountCircle, AddComment, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { useState } from "react"
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { addChatBox } from "../utils/chatSlice";

const Chats = () => {
  const [open,setOpen] = useState(false);
  const dispatch = useDispatch();
  let number = 0;
  const counter = useSelector(store => store.chat);

  return (
    <>
    <div className='min-h-screen flex justify-end items-end'>
     {counter && counter.map(chat => <ChatBox number = {number} key={chat}/>)}
      { open ? (
        <div className ='h-[700px] w-72 bg-gray-400 rounded-tl-2xl'>
            <div className="h-16 bg-gray-800 text-white flex justify-between items-center rounded-tl-2xl">
                <div className ="flex gap-4 px-2">
                    <AccountCircle />
                    <p className="text-lg">Chats</p>
                </div>
                <div className="flex px-2 gap-4">
                    <button onClick={() => dispatch(addChatBox(++number))}><AddComment /> </button>
                    <button onClick = {() => setOpen(!open)}><KeyboardArrowDown /> </button>
                </div>
            </div>
        </div>
      ) : (
        <div className ='h-16 w-72 bg-gray-800 text-white flex justify-between items-center rounded-tl-2xl'>
        <div className="flex px-2 gap-4">
          <AccountCircle />
          <p className="text-lg">Chats</p>
        </div>
        <div className="px-2">
         <button onClick = {() => setOpen(!open)}><KeyboardArrowUp /> </button>
       </div>
      </div>
      ) 
      }; 
     
    </div>
    </>
  )
}

export default Chats;