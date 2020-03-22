import React from 'react'
import StartScreenStyle from '../styles/StartScreen.scss';
export default class StartScreen extends React.Component {
	render() {
		return (
			<div class="start_screen">
				<div class="start_screen_img">
					<img src="startScreen-Image.svg"/></div>
				<div class="start_screen_title">Calculate your personal Pawprint</div>
				<div class="start_screen_desc">
					Next we have a short 2-3 minute survey covering Diet, Home, Travel and Other that will let us calculate your personal carboon footprint(or Parprint as we like to call it).
				</div>
				<div class="survey_next"></div>
				<div class="survey_next_text">Take the survey</div>
			</div>
		)
	}
}