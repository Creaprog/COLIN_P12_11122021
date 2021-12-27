import React from 'react'
import './Header.css'

/**
 *
 * @returns {Header}
 */
const Header = () => {
    return (
        <div className="header">
            <div className="header-content-title">
                <img src="/logo.svg" alt="logo" />
                <h1 className="title">SportSee</h1>
            </div>
            <div className="element-header-content">Accueil</div>
            <div className="element-header-content">Profil</div>
            <div className="element-header-content">Réglage</div>
            <div className="element-header-content">Communauté</div>
        </div>
    )
}

export default Header
