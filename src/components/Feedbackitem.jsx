
import {useState} from 'react';
import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa'

function Feedbackitem({item , closeItem}) {


    // const [rating, setRating]=useState(item.rating);
    // const [text, setText]=useState('  dummy feedback component');


    // const handleClick=()=>{
    //     setRating((pre)=>{
    //         return pre+1;
    //     })
    // }



  return (
    <Card reverse={true}>
        <div className='num-display'>{item.rating} </div>

        <button className='close' onClick={()=>closeItem(item.id)}><FaTimes color='red'></FaTimes></button>

        <div className='text-display'>{item.text}</div>

        {/* <button onClick={handleClick} >Click</button> */}


    </Card>
  )
}

export default Feedbackitem