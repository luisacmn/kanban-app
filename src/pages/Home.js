import React from "react"
import image from "../assets/scrum-board.jpg"
import "./home.css"

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6" id="info">
                    <h1>Simple Kanban</h1>
                    <p>View and control tasks and workflows in this easy-to-use application.</p>
                </div>
                <div className="col-lg-6">
                    <img src={image} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Home;