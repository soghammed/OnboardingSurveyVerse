import React from 'react'
import StartScreenStyle from '../styles/StartScreen.scss';

export default class StartScreen extends React.Component {
	render() {
		return (
			<div className="start_screen">
				<div className="start_screen_img">
					<img src="startScreen-Image.svg" alt=""/></div>
				<div className="start_screen_title">Calculate your personal Pawprint</div>
				<div className="start_screen_desc">
					Next we have a short 2-3 minute survey covering Diet, Home, Travel and Other that will let us calculate your personal carboon footprint(or Parprint as we like to call it).
				</div>
				<div className="survey_next" onClick={() => this.props.setScreen('Question1')}>
					<div className="survey_next_text">Take the survey</div>
				</div>
			</div>
		)
	}
}