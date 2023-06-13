import { useSelector } from 'react-redux';
import { randomMessageGenerator } from '../utils/helper';
import { AccountCircle } from '@mui/icons-material';

const Messages = () => {
    const messages = useSelector(store => store.text);
  return (
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

  )
}

export default Messages