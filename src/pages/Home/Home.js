import React from 'react'
import NavBarLeft from '../NavBarLeft/NavBarLeft'
import Header from './../Header/Header'
import './Home.css'
import useActivity from '../../services/useActivity'
import useAverageSessions from '../../services/useAverageSessions'
import usePerformance from '../../services/usePerformance'
import BarChartComponent from './components/BarChartComponent'
import LineChartComponent from './components/LineChartComponent'
import RadarChartComponent from './components/RadarChartComponent'
import RadialChartComponent from './components/RadialChartComponent'
import useUser from '../../services/useUser'

/**
 *
 * @param {array} query
 * @returns {array}
 */
function DataActivity(query) {
    let data = []
    let i = 0
    query.sessions.map((element) => {
        return data.push({
            name: ++i,
            kilogram: element.kilogram,
            calories: element.calories,
        })
    })
    return data
}

function DataAverageSessions(query) {
    let data = []
    let i = 0
    const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    query.sessions.map((element) => {
        return data.push({
            name: week[i++],
            min: element.sessionLength,
        })
    })

    return data
}

function DataPerformance(query) {
    let data = []
    query.data.forEach((element) => {
        data.push({
            kind: query.kind[element.kind],
            value: element.value,
        })
    })
    return data
}

function DataScore(query) {
    let data = []
    data.push({
        score: query.todayScore * 100,
        fill: '#8884d8',
    })
    return data
}
/**
 *
 * @returns {Home}
 */
const Home = () => {
    const [queryActivity] = useActivity(12)
    const [queryAverageSessions] = useAverageSessions(12)
    const [queryformance] = usePerformance(12)
    const [queryUser] = useUser(12)

    let dataActivity = null
    if (queryActivity && queryActivity.sessions) {
        dataActivity = DataActivity(queryActivity)
    }

    let dataAverageSessions = null
    if (queryAverageSessions) {
        dataAverageSessions = DataAverageSessions(queryAverageSessions)
    }

    let dataPerformance = null
    if (queryformance) {
        dataPerformance = DataPerformance(queryformance)
    }

    let dataScore = null
    if (queryUser) {
        dataScore = DataScore(queryUser.todayScore)
    }
    return (
        <>
            <Header />
            <div className="row">
                <NavBarLeft />
                <div className="container">
                    <div className="hello">
                        <div>Bonjour</div>
                        <div className="name">
                            {queryUser
                                ? queryUser.userInfos.firstName
                                : 'Erreur'}
                        </div>
                    </div>
                    <p>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                    <div className="row-left">
                        <div className="bar-chart-component">
                            {dataActivity != null ? (
                                <BarChartComponent data={dataActivity} />
                            ) : null}
                        </div>
                        <LineChartComponent data={dataAverageSessions} />
                        <RadarChartComponent data={dataPerformance} />
                        <RadialChartComponent data={dataScore} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
