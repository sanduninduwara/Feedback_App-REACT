import React from 'react'

function FeedbackStatus({feedback}) {
  
    const getAVG=(array)=>{

        var tot=0;

        array.forEach(element => {
            tot+=element.rating
        });

        console.log(tot)

        return tot/array.length

    }

    return (<div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>AVG Rating: {getAVG(feedback)} </h4>

    </div>
  )
}

export default FeedbackStatus