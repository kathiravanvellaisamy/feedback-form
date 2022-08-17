import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) =>{

    const [ feedback,setFeedback ] = useState([
        {
            id:1,
            text: 'Hi Ashok, this component text is coming form context',
            rating:10
        },
        {
            id:2,
            text: 'Hi Kathir, this component text is coming form context',
            rating:6
        },
        {
            id:3,
            text: 'Hi Hardik, this component text is coming form context',
            rating:9
        },
    ])

    const [ feedbackEdit,setFeedbackEdit ] = useState({
        item :{},
        edit:false
    })
    //Set item to be added
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]);
    }

    //Set item tobe deleted
    const deleteFeedback = (id) => {
        if(window.confirm('Hey Kathir, do you want to delete this item?')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Update the item
    const updateFeedback = (id,updItem) =>{
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item,...updItem } : item ))
        )
    }

    // set item to be edited
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback
    }}>
        { children }
    </FeedbackContext.Provider>
}


export default FeedbackContext