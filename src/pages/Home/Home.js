import React from 'react';
import NavBarLeft from '../NavBarLeft/NavBarLeft';
import Header from './../Header/Header';
import './Home.css';
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';
import RadarChartComponent from './components/RadarChartComponent';
import RadialChartComponent from './components/RadialChartComponent';
import { useCallUser2 } from '../../services/useCallUser';
import Model from '../../Model';
import { useParams } from 'react-router-dom';

/**
 *
 * @returns {Home}
 */
const Home = () => {
	let { id } = useParams();
	if (id === undefined) {
		id = 12;
	}
	const [queryUser] = useCallUser2(() => Model.getUser(id));
	const [queryActivity] = useCallUser2(() => Model.getActivity(id));
	const [queryAverageSessions] = useCallUser2(() =>
		Model.getAverageSessions(id)
	);
	const [queryperformance] = useCallUser2(() => Model.getPerformance(id));

	return (
		<>
			<Header />
			<div className="row">
				<NavBarLeft />
				<div className="container">
					<div className="hello">
						{queryUser === undefined ? (
							<div>
								La récupération des données est indisponible pour le moment.
							</div>
						) : (
							<>
								<div>Bonjour</div>
								<div className="name">
									{queryUser ? queryUser.userInfos.firstName : '...'}
								</div>
							</>
						)}
					</div>
					<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

					<div className="row">
						<div className="row-left">
							<div className="bar-chart-component">
								<div className="bar-chart-component-info">
									<div className="bar-chart-component-info-title">
										Activité quotidienne
									</div>
									<div className="bar-chart-component-info-bar-chart">
										<div className="poids">
											<img
												src="/oval-noir.svg"
												alt="Calories"
												className="oval"
											/>
											Poids(kg)
										</div>
										<div className="calories">
											<img
												src="/oval-rouge.svg"
												alt="Calories"
												className="oval"
											/>
											Calories(kCal)
										</div>
									</div>
								</div>
								{queryActivity != null ? (
									<BarChartComponent data={queryActivity} />
								) : null}
							</div>
							<div className="line-chart-component">
								{queryAverageSessions != null ? (
									<LineChartComponent data={queryAverageSessions} />
								) : null}
							</div>
							<div className="radar-chart-component">
								{queryperformance != null ? (
									<RadarChartComponent data={queryperformance} />
								) : null}
							</div>
							<div className="radial-chart-component">
								{queryUser && queryUser.score != null ? (
									<RadialChartComponent
										data={[
											{
												score: queryUser.score * 100,
												fill: '#FF0101',
											},
										]}
									/>
								) : null}
							</div>
						</div>
						<div className="row-right">
							<article className="article">
								<div className="grp-article-icon">
									<div className="article-icon-calories"></div>
									<img
										src="/calories.svg"
										alt="Calories"
										className="img-article"
									/>
								</div>
								<div className="article-text">
									<div className="article-title">
										{queryUser != null ? queryUser.keyData.calorieCount : '...'}
										kCal
									</div>
									<div className="article-content">Calories</div>
								</div>
							</article>

							<article className="article">
								<div className="grp-article-icon">
									<div className="article-icon-proteines"></div>
									<img
										src="/chicken.svg"
										alt="proteines"
										className="img-article"
									/>
								</div>
								<div className="article-text">
									<div className="article-title">
										{queryUser != null ? queryUser.keyData.proteinCount : '...'}
										g
									</div>
									<div className="article-content">Proteines</div>
								</div>
							</article>

							<article className="article">
								<div className="grp-article-icon">
									<div className="article-icon-glucides"></div>
									<img
										src="/apple.svg"
										alt="glucides"
										className="img-article"
									/>
								</div>
								<div className="article-text">
									<div className="article-title">
										{queryUser != null
											? queryUser.keyData.carbohydrateCount
											: '...'}
										g
									</div>
									<div className="article-content">Glucides</div>
								</div>
							</article>

							<article className="article">
								<div className="grp-article-icon">
									<div className="article-icon-lipides"></div>
									<img
										src="/cheeseburger.svg"
										alt="lipides"
										className="img-article"
									/>
								</div>
								<div className="article-text">
									<div className="article-title">
										{queryUser != null ? queryUser.keyData.lipidCount : '...'}g
									</div>
									<div className="article-content">Lipides</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
