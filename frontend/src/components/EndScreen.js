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
	  	footer: (<span>Lets take a look at how you look in the <i class="next-cat">Home</i> category</span>)
	  };
	}
	render() {
		return (
			<div class="end-screen">
				<div class="cat-header"></div>
				<div class="cat-title">{this.state.title}</div>
				<div class="cat-subtitle">{this.state.subtitle}</div>
				<div class="uk-national-average">
					<b>UK National average:</b> {this.state.na}
				</div>
				<div class="slider-bg"></div>
				<div class="slider-gauge"></div>
				<div class="slider-desc">{this.state.slider_desc}</div>
				<div class="footer-content">{this.state.footer}</div>
				<div class="survey-next">
					<span class="survey-next-text">Continue</span>
				</div>
			</div>
		)
	}
}