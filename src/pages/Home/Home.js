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
        score: query * 100,
        fill: '#FF0101',
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
        console.log(queryUser.keyData)
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
                            {queryUser ? queryUser.userInfos.firstName : '...'}
                        </div>
                    </div>
                    <p>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                    <div className="row">
                        <div className="row-left">
                            <div className="bar-chart-component">
                                {dataActivity != null ? (
                                    <BarChartComponent data={dataActivity} />
                                ) : null}
                            </div>
                            <div className="line-chart-component">
                                {dataAverageSessions != null ? (
                                    <LineChartComponent
                                        data={dataAverageSessions}
                                    />
                                ) : null}
                            </div>
                            <div className="radar-chart-component">
                                {dataPerformance != null ? (
                                    <RadarChartComponent
                                        data={dataPerformance}
                                    />
                                ) : null}
                            </div>
                            <div className="radial-chart-component">
                                {dataScore != null ? (
                                    <RadialChartComponent data={dataScore} />
                                ) : null}
                            </div>
                        </div>
                        <div className="row-right">
                            <article className="article">
                                <div className="article-icon-calories">
                                    <img
                                        src="calories.svg"
                                        alt="Calories"
                                        className="img-calories"
                                    />
                                </div>
                                <div className="article-text">
                                    <div className="article-title">
                                        {queryUser != null
                                            ? queryUser.keyData.calorieCount
                                            : '...'}
                                        kCal
                                    </div>
                                    <div className="article-content">
                                        Calories
                                    </div>
                                </div>
                            </article>

                            <article className="article">
                                <div className="article-icon-calories">
                                    <img
                                        src="calories.svg"
                                        alt="Calories"
                                        className="img-calories"
                                    />
                                </div>
                                <div className="article-text">
                                    <div className="article-title">
                                        {queryUser != null
                                            ? queryUser.keyData.calorieCount
                                            : '...'}
                                        g
                                    </div>
                                    <div className="article-content">
                                        Calories
                                    </div>
                                </div>
                            </article>

                            <article className="article">
                                <div className="article-icon-calories">
                                    <img
                                        src="calories.svg"
                                        alt="Calories"
                                        className="img-calories"
                                    />
                                </div>
                                <div className="article-text">
                                    <div className="article-title">
                                        {queryUser != null
                                            ? queryUser.keyData.calorieCount
                                            : '...'}
                                        g
                                    </div>
                                    <div className="article-content">
                                        Calories
                                    </div>
                                </div>
                            </article>

                            <article className="article">
                                <div className="article-icon-calories">
                                    <img
                                        src="calories.svg"
                                        alt="Calories"
                                        className="img-calories"
                                    />
                                </div>
                                <div className="article-text">
                                    <div className="article-title">
                                        {queryUser != null
                                            ? queryUser.keyData.calorieCount
                                            : '...'}
                                        g
                                    </div>
                                    <div className="article-content">
                                        Calories
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
