import React from 'react';
import NavBarLeft from '../NavBarLeft/NavBarLeft';
import Header from './../Header/Header';
import './Home.css';
import useCallUser from '../../services/useCallUser';
import ChartBar from './components/ChartBar';
import ChartLine from './components/ChartLine';
import ChartRadar from './components/ChartRadar';

/**
 * 
 * @returns {Home}
 */
const Home = (props) => {
    const [data, isLoading, error] = useCallUser("http://localhost:4000/user/12");
    return(
        <>
            <Header />
            <div className="row">
                <NavBarLeft />
                <div className="container">
                    <div className="hello">
                        <div>Bonjour</div>
                        <div className="name">{data ? data.userInfos.firstName : isLoading ? error : "Erreur"}</div>
                    </div>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    <ChartBar />
                    <ChartLine />
                    <ChartRadar />
                </div>
                
            </div>
        </>
    );
}

export default Home;