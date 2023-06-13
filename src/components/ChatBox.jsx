import { user_logo } from "../utils/constants"

const ChatBox = () => {
  return (
    <div className ='h-[700px] w-72 bg-gray-400 rounded-tl-xl'>
        <div className="h-16 bg-gray-800 text-white flex justify-between items-center">
            <div className ="flex">
                <img
                className="h-7 px-2"
                src={user_logo}
                alt="user_icon"
                />
                <p className="text-xl">Chat</p>
            </div>
            <div className="flex justify-between text-xl">
                <p className="px-3">+</p>
                <p className="px-2">V</p>
            </div>
        </div>
    </div>
  )
}

export default ChatBox