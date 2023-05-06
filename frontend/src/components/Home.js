import React from "react";
import { useLocation} from "react-router-dom" ;
import { Link } from "react-router-dom";
const Home = () => {
    const location=useLocation()
    
    return(
        
        <div className="form">
            <h1>Hello {location.state.id} and welcome to the home page</h1>
            <h3>Upload audio by following the below link: </h3>
            <Link to="/upload">Upload Audio</Link>
        </div>
    )
}

export default Home
