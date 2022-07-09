import { useState } from "react";
import {v4 as uuid} from "uuid";


import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeeedbackData from "./data/FeedbackData";
import FeedbackStatus from "./components/FeedbackStatus";
import FeedbackForm from './components/FeedbackForm'





function App() {
  const [feedback,setFeedback]=useState(FeeedbackData)

  const delItem=(id)=>{
    if(window.confirm('you want to delete item '  )){
      // console.log(id);
      setFeedback(feedback.filter((item)=>item.id !==id))

    }
  }

  const addFeedback=(newFeedback)=>{

    newFeedback.id=uuid();

    setFeedback([newFeedback,...feedback])

    console.log(newFeedback);

  }

  return (



    <>

        <Header />
       
        <div className="container">
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStatus feedback={feedback}/>
          <FeedbackList feedback={feedback} closeItem={delItem}/>
       

        </div>
        
    </>
    
    
  );
}

export default App;
