import { createContext, useState,useEffect } from 'react';
import {v4 as uuid} from "uuid";
const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [isLoading,setIsLoading]=useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

    useEffect(() => {
        fetchFeedback();
      }, [])


    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
    
        setFeedback(data)
        setIsLoading(false)
      }


    // =================

    const delItem=(id)=>{
        if(window.confirm('you want to delete item '  )){
            fetch(`/feedback/${id}`, {
                method: 'DELETE'
              })
       
          setFeedback(feedback.filter((item)=>item.id !==id))
    
        }
      }


    const addFeedback=async (newFeedback)=>{

        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
          })
      
        const data = await response.json()
      
        setFeedback([data, ...feedback])
        console.log(newFeedback);

    }


    const editFeedback=(item)=>{

        setFeedbackEdit({
            item,
            edit:true
        })

    }
    
    const updateFeedback=async(id,updateditem)=>{


        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateditem),
          })
      
        const data = await response.json()
      

        console.log("updated")
        setFeedback(feedback.map((item)=>(item.id===id? {...item,...data} : item)))


    }



    return(
        <FeedbackContext.Provider  value={
            {   feedback,
                feedbackEdit,
                isLoading,
                delItem,
                addFeedback,
                editFeedback,
                updateFeedback
        }}>
            {children}

        </FeedbackContext.Provider>

    )


}

export default FeedbackContext;