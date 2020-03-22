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
	  	},
	  	selectedAnswer: 0,
	  };

	}

	setAnswer = (answer) => {
		this.setState({selectedAnswer: answer});
	}

	setScreen(){
		if(this.state.selectedAnswer === 0){
			alert("Pick an answer and try again");
		}else{
			this.props.setScreen(this.state.next_screen);
		}
		
	}
	render() {
		//based on figma design some Next Q & some Done.
		let nextBtnText;
		switch(this.props.number){
			case 1:
			case 2:
			case 3:
				nextBtnText = "Next Question";
				break;
			case 4:
			case 5:
				nextBtnText = "Done";
				break;
		}

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

				<div className={"question-text"+(this.props.number === 4 ? " smaller-text" : "")}>{this.props.text}</div>
				<div className={"a-option O-1"+(this.state.selectedAnswer === 1 ? " active" : "")} onClick={() => this.setAnswer(1)}><span className={"o-text"+(this.state.selectedAnswer === 1 ? " active" : "")}>{this.props.answers[0]}</span></div>
				<div className={"a-option O-2"+(this.state.selectedAnswer === 2 ? " active" : "")} onClick={() => this.setAnswer(2)}><span className={"o-text"+(this.state.selectedAnswer === 2 ? " active" : "")}>{this.props.answers[1]}</span></div>
				<div className={"a-option O-3"+(this.state.selectedAnswer === 3 ? " active" : "")} onClick={() => this.setAnswer(3)}><span className={"o-text"+(this.state.selectedAnswer === 3 ? " active" : "")}>{this.props.answers[2]}</span></div>
				<div className={"a-option O-4"+(this.state.selectedAnswer === 4 ? " active" : "")} onClick={() => this.setAnswer(4)}><span className={"o-text"+(this.state.selectedAnswer === 4 ? " active" : "")}>{this.props.answers[3]}</span></div>

				<div className="survey-next-q" onClick={() => this.setScreen()}>
					<span className="survey-next-text">
						{nextBtnText}
					</span>
				</div>
			</div>
		);
	}
}