import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';
import Feedbackitem from './Feedbackitem'
import Spinner from './shared/Spinner'

function FeedbackList() {


    // console.log(feedback);
    const {feedback,isLoading}=useContext(FeedbackContext);

    if(!isLoading && (!feedback || feedback.length===0)){
        return (
      <p>no feedbacks </p>
    )
    }else{
        return isLoading ? (<Spinner></Spinner>) :
            <div className='feedback-list'>
                { feedback.map((item)=>(

                    <Feedbackitem key={item.id} item={item}  />
                ))}
                
                
                
                </div>
        
    }

    
}

export default FeedbackList