import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import EndScreen from './components/EndScreen';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current_screen: 'StartScreen',
      questions: this.getQuestionsData(),
      StartScreen: (<StartScreen setScreen={this.setScreen}/>),
      EndScreen: (<EndScreen setScreen={this.setScreen}/>) 
    }
  }

  componentDidMount(){
    this.prepareQuestions();
  }

  async getQuestionsData(){
    let questions = await fetch('http://localhost:9000/get-questions')
      .then(res => res.json())
      .then(res => { 
        return res;
      })
      .catch(err => console.log(err));
    return questions;
  }


  prepareQuestions(){
    if(this.state.questions){ 
      // console.log(this.state.questions);
      this.state.questions
        .then(res => this.setState({questions: res},
          () => {
            this.state.questions.map( q => {
              let keyName = "Question"+q.id
              //set question component
              this.setState({
                [keyName]: (
                  <QuestionScreen
                    key={q.id}
                    number={q.id}
                    text={q.text}
                    answers={[q.answer1,q.answer2,q.answer3,q.answer4]}
                    setScreen={this.setScreen}/>
                )
              });
              return 1;
            })
          })
        );
    }
  }

  setScreen = (new_screen) => {
    this.setState({current_screen: new_screen});
  }

  render(){
    const {current_screen} = this.state;
    let view_port = this.state[current_screen];
    
    return (
      <div className="App">
        {view_port}
      </div>
    );
  }

}