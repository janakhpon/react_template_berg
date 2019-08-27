import React, { Component } from 'react';
import './index.css'

export default class Header extends Component{

    render(){
        return(
        <header className="default-header">
			<div className="container">
				<div className="header-wrap">
					<div className="header-top d-flex justify-content-between align-items-center">
						<div className="logo">
							<a href="index.html"><img src="img/logo.png" alt="logo"/>:</a>
						</div>
						<div className="main-menubar d-flex align-items-center">
							<nav className="hide">
								<a href="index.html">Home</a>
								<a href="generic.html">Generic</a>
								<a href="elements.html">Elements</a>
							</nav>
							<div className="menu-bar"><span className="lnr lnr-menu"></span></div>
						</div>
					</div>
				</div>
			</div>
		</header>
        );
    }
}