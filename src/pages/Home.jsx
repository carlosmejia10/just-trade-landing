import React from "react";
import "./home.scss";
import Header from "../components/header/Header"
import Benefits from "../components/benefits/Benefits"
import Strengths from "../components/strengths/Strengths"
import Information from "../components/information/Information"
import Gains from "../components/gains/Gains"
import Start from "../components/start/Start"
import Team from "../components/team/Team"
import Clients from "../components/clients/Clients"
import Join from "../components/join/Join";
import Blog from "../components/blog/Blog";

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Benefits/>
            <Strengths/>
            <Information/>
            <Gains/>
            <Start/>
            <Team/>
            <Clients/>
            <Join/>
            <Blog/>
        </div>
    )
}

export default Home;