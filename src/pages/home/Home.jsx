import React from "react";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import Navbar from "../../components/navbar/Navbar";
import Popular from "../../components/popular/Popular";
import TopBlog from "../../components/top-blog/TopBlog";
import TopCategory from "../../components/top-category/TopCategory";
import "./home.css";

const Home = ()=>{
    return (
        <div>
            <Navbar/>
            <Header/>
            <Intro/>
            <div className="bg-light">
                <div className="container">
                    <Featured/>
                </div>

                <div className="container">
                    <h1 className="homeTitle">Browse by top category type</h1>
                    <TopCategory/>
                </div>

                 <div className="container">
                    <h1 className="homeTitle">Most Popular</h1>
                    <Popular/>
                </div>

                <div className="blogs my-5 py-5">
                    <div className="container">
                        <h1 className="homeTitle">Get inspiration for your next Internship</h1>
                        <TopBlog/>
                    </div>
                </div>

                <div className="footer">
                    <div className="container">
                        <Footer/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home