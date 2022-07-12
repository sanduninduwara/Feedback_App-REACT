
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import {FaTimes , FaEdit} from 'react-icons/fa'

function Feedbackitem({item }) {


    // const [rating, setRating]=useState(item.rating);
    // const [text, setText]=useState('  dummy feedback component');


    // const handleClick=()=>{
    //     setRating((pre)=>{
    //         return pre+1;
    //     })
    // }
    const{delItem ,editFeedback}=useContext(FeedbackContext);



  return (
    <Card reverse={true}>
        <div className='num-display'>{item.rating} </div>

        <button className='close' onClick={()=>delItem(item.id)}><FaTimes color='red'></FaTimes></button>

        <button className='edit' onClick={()=>editFeedback(item)}><FaEdit color='red'></FaEdit></button>

        <div className='text-display'>{item.text}</div>

        {/* <button onClick={handleClick} >Click</button> */}


    </Card>
  )
}

export default Feedbackitem