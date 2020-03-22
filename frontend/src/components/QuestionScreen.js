import React from 'react'
import QuestionStyle from '../styles/Question.scss'
export default class QuestionScreen extends React.Component {

	constructor(props) {
	  super(props);
		
	  this.state = {
	  	cats: ['Diet', 'Home', 'Travel', 'Other'],
	  	total: 24,

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

				<div class="question-number">Question {this.props.number} of {this.state.total}</div>

				<div class="question-text">{this.props.text}</div>
				<div class="a-option O-1"><span class="o-text">{this.props.answers[0]}</span></div>
				<div class="a-option active O-2"><span class="o-text active">{this.props.answers[1]}</span></div>
				<div class="a-option O-3"><span class="o-text">{this.props.answers[2]}</span></div>
				<div class="a-option O-4"><span class="o-text">{this.props.answers[3]}</span></div>

				<div class="survey-next-q">
					<span class="survey-next-text">
						{this.props.number+1 < this.state.total ? 'Next Question' : 'Submit'}
					</span>
				</div>
			</div>
		);
	}
}