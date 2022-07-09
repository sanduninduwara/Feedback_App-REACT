import {useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import SelectRating from './SelectRating';

function FeedbackForm({handleAdd}){


    const [text,setText]=useState('');
    const [rating,setRating]=useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange=(e)=>{


        if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
        
    // prettier-ignore
        } else if (text.trim().length < 10) { // 👈 check for less than 10
        setMessage('Text must be at least 10 characters')
        setBtnDisabled(true)
        } else {
        setMessage(null)
        setBtnDisabled(false)
        }
        setText(e.target.value);
    }


    const handleSubmit=(e)=>{
      e.preventDefault()

      const newFeedback={
        text,
        rating
      }

      // console.log(newFeedback)
      handleAdd(newFeedback)

      setText('')
      
    }


    return (
    <Card>
      <form  onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <SelectRating select={setRating} />
      
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          
          <Button  type='submit' version='secondary' isDisabled={btnDisabled}>send </Button>
        </div>
        {message && <div className='message'>{message}</div>}

     
      </form>
    </Card>
  )

}

export default FeedbackForm;