import React from 'react';
import './NavBarLeft.css';

/**
 *
 * @returns {NavBarLeft}
 */
const NavBarLeft = () => {
	return (
		<>
			<div className="nav-bar-left">
				<div className="grp-button">
					<button className="nav-bar-left-button">
						<img src="/meditation.svg" alt="Meditation Logo" />
					</button>
					<button className="nav-bar-left-button">
						<img src="/natation.svg" alt="Meditation Logo" />
					</button>
					<button className="nav-bar-left-button">
						<img src="/cycliste.svg" alt="Meditation Logo" />
					</button>
					<button className="nav-bar-left-button">
						<img src="/muscu.svg" alt="Meditation Logo" />
					</button>
				</div>
				<div className="copyright">Copiryght, SportSee 2020</div>
			</div>
		</>
	);
};

export default NavBarLeft;
