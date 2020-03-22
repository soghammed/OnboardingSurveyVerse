import React from 'react'
import EndScreenStyle from '../styles/EndScreen.scss'


export default class EndScreen extends React.Component {
	constructor(props) {
	  super(props);
		
	  this.state = {
	  	title: 'Diet',
	  	subtitle: 'Your score',
	  	na: '2.9 Tons of CO2 produced per year',
	  	slider_desc: 'Your using 3.2 Tons of CO2 / year',
	  	footer: (<span>Lets take a look at how you look in the <i className="next-cat">Home</i> category...</span>)
	  };
	}
	render() {
		return (
			<div className="end-screen">
				<div className="cat-header"></div>
				<div className="cat-title">{this.state.title}</div>
				<div className="cat-subtitle">{this.state.subtitle}</div>
				<div className="uk-national-average">
					<b>UK National average:</b> {this.state.na}
				</div>
				<div className="slider-bg"></div>
				<div className="slider-gauge"></div>
				<div className="slider-desc">{this.state.slider_desc}</div>
				<div className="footer-bg"></div>
				<div className="footer-content">{this.state.footer}</div>
				<div className="survey-next" onClick={() => this.props.setScreen('StartScreen')}>
					<span className="survey-next-text">Continue</span>
				</div>
			</div>
		)
	}
}