import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStatus() {
    
    const {feedback}=useContext(FeedbackContext)
    const getAVG=(array)=>{

        var tot=0;

        array.forEach(element => {
            tot+=element.rating
        });

        

        return tot/array.length

    }

    return (<div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>AVG Rating: {getAVG(feedback)} </h4>

    </div>
  )
}

export default FeedbackStatus