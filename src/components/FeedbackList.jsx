import React from 'react'
import Feedbackitem from './Feedbackitem'

function FeedbackList({feedback,closeItem}) {
    console.log(feedback);
    if(!feedback || feedback.length===0){
        return (
      <p>no feedbacks </p>
    )
    }else{
        return (

            <div className='feedback-list'>
            { feedback.map((item)=>(

                <Feedbackitem key={item.key} item={item}  closeItem={closeItem}/>
            ))}
            
            
            
            </div>

           
        )
    }

    
}

export default FeedbackList