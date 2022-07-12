
import { BrowserRouter as Router, Route,Routes ,Link } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
// import FeeedbackData from "./data/FeedbackData";
import FeedbackStatus from "./components/FeedbackStatus";
import FeedbackForm from './components/FeedbackForm'

import AboutPage from "./pages/AboutPage";

import {FeedbackProvider} from "./context/FeedbackContext";





function App() {
  // const [feedback,setFeedback]=useState(FeeedbackData)




  return (



    
    <FeedbackProvider>
      <Router>
        
        <Header />
       
        <div className="container">

          <Routes>

              <Route path='/' element={
                  <>
                    <FeedbackForm />
                    <FeedbackStatus />
                    <FeedbackList />

                    <a href="/about">About</a>
                    <br/>
                    <Link to="/about">About without refresh</Link>
                  </>
              } />
          
    
              <Route path='/about' element={<AboutPage />} />

          </Routes>

       
        </div>

       

        </Router>
      </FeedbackProvider>
     
    
    
    
  );
}

export default App;
