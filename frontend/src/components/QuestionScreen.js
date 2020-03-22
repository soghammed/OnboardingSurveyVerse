import React from 'react'
import QuestionStyle from '../styles/Question.scss'
export default class QuestionScreen extends React.Component {

	constructor(props) {
	  super(props);
		
	  this.state = {
	  	cats: ['Diet', 'Home', 'Travel', 'Other'],
	  	text: 'How often do you eat diary?',
	  	number: this.props.number ? this.props.number : 1,
	  	total: 24,
	  	answer: [
	  		'Daily',
	  		'3+ times per week',
	  		'1 or 2 times',
	  		'Not at all'
	  	]

	  };
	}
	render() {
		return (
			<div class="question">
				<div class="questionsProgress"></div>
				<div class="questionsProgressBar"></div>
				
				<div class="cat-progress diet-cat-progress cat-progress-active"></div>
				<div class="cat diet-cat">{this.state.cats[0]}</div>

				<div class="cat-progress home-cat-progress"></div>
				<div class="cat home-cat">{this.state.cats[1]}</div>

				<div class="cat-progress travel-cat-progress"></div>
				<div class="cat travel-cat">{this.state.cats[2]}</div>

				<div class="cat-progress other-cat-progress"></div>
				<div class="cat other-cat">{this.state.cats[3]}</div>

				<div class="question-number">Question {this.state.number} of {this.state.total}</div>

				<div class="question-text">{this.state.text}</div>
				<div class="a-option O-1"><span class="o-text">{this.state.answer[0]}</span></div>
				<div class="a-option active O-2"><span class="o-text active">{this.state.answer[1]}</span></div>
				<div class="a-option O-3"><span class="o-text">{this.state.answer[2]}</span></div>
				<div class="a-option O-4"><span class="o-text">{this.state.answer[3]}</span></div>

				<div class="survey-next-q">
					<span class="survey-next-text">
						{this.state.number+1 < this.state.total ? 'Next Question' : 'Submit'}
					</span>
				</div>
			</div>
		);
	}
}