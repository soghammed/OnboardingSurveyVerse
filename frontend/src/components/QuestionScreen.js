import React from 'react'
import QuestionStyle from '../styles/Question.scss'
export default class QuestionScreen extends React.Component {

	constructor(props) {
	  super(props);
		
	  this.state = {
	  	cats: ['Diet', 'Home', 'Travel', 'Other'],
	  	total: 24,
	  	next_screen: (this.props.number+1) > 5 ? 'EndScreen' : 'Question'+(this.props.number+1),
	  	progressBlocks: {
	  		diet: [
		  		this.props.number >= 1 ? true : false,
		  		this.props.number >= 2 ? true : false,
		  		this.props.number >= 3 ? true : false,
		  		this.props.number >= 4 ? true : false,
		  		this.props.number >= 5 ? true : false,
		  	]
	  	}
	  };

	  
	}
	setScreen(){
		this.props.setScreen(this.state.next_screen);
	}
	render() {
		return (
			<div className="question">
				<div className="questionsProgress"></div>
				<div className="questionsProgressBar"></div>
				
				<div className="cat-progress diet-cat-progress active">
					<div className={"p-block"+ (this.state.progressBlocks.diet[0] ? " active" : "")}></div>
					<div className={`p-block`+ (this.state.progressBlocks.diet[1] ? " active" : "")}></div>
					<div className={`p-block`+ (this.state.progressBlocks.diet[2] ? " active" : "")}></div>
					<div className={`p-block`+ (this.state.progressBlocks.diet[3] ? " active" : "")}></div>
					<div className={`p-block`+ (this.state.progressBlocks.diet[4] ? " active" : "")}></div>
				</div>
				<div className="cat diet-cat">{this.state.cats[0]}</div>

				<div className="cat-progress home-cat-progress"></div>
				<div className="cat home-cat">{this.state.cats[1]}</div>

				<div className="cat-progress travel-cat-progress"></div>
				<div className="cat travel-cat">{this.state.cats[2]}</div>

				<div className="cat-progress other-cat-progress"></div>
				<div className="cat other-cat">{this.state.cats[3]}</div>

				<div className="question-number">Question {this.props.number} of {this.state.total}</div>

				<div className="question-text">{this.props.text}</div>
				<div className="a-option O-1"><span className="o-text">{this.props.answers[0]}</span></div>
				<div className="a-option active O-2"><span className="o-text active">{this.props.answers[1]}</span></div>
				<div className="a-option O-3"><span className="o-text">{this.props.answers[2]}</span></div>
				<div className="a-option O-4"><span className="o-text">{this.props.answers[3]}</span></div>

				<div className="survey-next-q" onClick={() => this.setScreen()}>
					<span className="survey-next-text">
						{this.props.number+1 < this.state.total ? 'Next Question' : 'Submit'}
					</span>
				</div>
			</div>
		);
	}
}