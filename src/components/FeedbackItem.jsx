import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'



function FeedbackItem({ item }) {
    const{deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card reverse={true}>
            <div className="num-display">{ item.rating }</div>
                <button className="close" onClick={()=>deleteFeedback(item.id)}>
                    <FaTimes color="cyan" />
                </button>
                <button className="edit">
                    <FaEdit color="grey" onClick={()=>editFeedback(item)} />
                </button>
            <div className="text-display">{ item.text }</div>            
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
