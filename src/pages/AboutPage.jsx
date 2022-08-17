import { Link } from 'react-router-dom'
import Card from "../components/shared/Card"

function AboutPage() {
    return (
        <Card>
            <h1>About Ashok & Kathiravan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam hic asperiores praesentium eveniet possimus ipsa, facilis, voluptatem quisquam consectetur natus libero, eos nulla sunt quasi autem nam recusandae itaque? Provident cum ea quo, facere sit reprehenderit, neque corporis fugit, excepturi fugiat nulla quibusdam. Minima rem aliquid, et officia facilis deleniti?</p>
            <Link to="/">Back to Home</Link>

             
        </Card>
    )
}

export default AboutPage
