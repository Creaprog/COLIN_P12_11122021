import React from 'react';
import NavBarLeft from '../NavBarLeft/NavBarLeft';
import Header from './../Header/Header';
import './Home.css';

/**
 * 
 * @returns {Home}
 */
const Home = (props) => {
    console.log(props.CallUser);
    return(
        <>
            <Header />
            <div className="row">
                <NavBarLeft />
                <div className="container">
                    <h1>Bonjour</h1>
                </div>
            </div>
        </>
    );
}

export default Home;