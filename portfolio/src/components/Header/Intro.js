import React, { Component } from "react";
import "../Header/Intro.css"

class Intro extends Component {

	render() {
		return (
			<div>
			<div id="clouds">
				<div className="cloud x1"></div>
				<div className="cloud x2"></div>
				<div className="cloud x3"></div>
				<div className="cloud x4"></div>
				<div className="cloud x5"></div>
				<div className="cloud x6"></div>
				<div className="cloud x7"></div>
				<div className="cloud x8"></div>
				<div className="cloud x9"></div>
				<div className="cloud x10"></div>
			</div>
		
			<div className="container">
				<div className="campfire-wrapper">
					<div className="tree-container-back">
						<div className="tree-8"></div>
						<div className="tree-9"></div>
						<div className="tree-10"></div>
					</div>
					<div className="rock-container">
						<div className="rock-big"></div>
						<div className="rock-small">
							<div className="rock-1"></div>
							<div className="rock-2"></div>
							<div className="rock-3"></div>
							<div className="rock-4"></div>
						</div>
					</div>
					<div className="smoke-container">
						<svg>
							<path d="M 150 0 Q 200 100 100 250 C 0 450 120 400 50 600  " />
						</svg>
						<div className="fire-container">

							<div className="flame-1"></div>
							<div className="flame-2"></div>
							<div className="flame-3"></div>
						</div>
					</div>
					<div className="tree-container-front">
						<div className="tree-1"></div>
						<div className="tree-2"></div>
						<div className="tree-3"></div>
						<div className="tree-4"></div>
						<div className="tree-5"></div>
						<div className="tree-6"></div>
						<div className="tree-7"></div>
					</div>
				</div>
				</div>
			</div>
		)
	}
}

export default Intro;