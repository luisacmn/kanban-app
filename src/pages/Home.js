import React from "react"
import image from "../assets/scrum-board.jpg"
import "./home.css"
import {Link} from "react-router-dom"


const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Simple Kanban</h1>
                    <p>View and control your tasks and workflows in this easy-to-use application.</p>
                    <Link to="./kanban">
                        <button className="btn btn-primary">Simple Kanban</button>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <img src={image} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Home;