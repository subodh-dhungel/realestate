import React from 'react'
import '../App.css'

function NavigationBar() {
    return (
        <header>
            <nav className="navbar-wrapper">

                <div>
                    <h3>Portfolio</h3>
                </div>
                
                <div className="navigationButtons">
                    <button>Work</button>
                    <button>About</button>
                    <button>Contact</button>
                </div>
            </nav>
        </header>
    )
}

export default NavigationBar
