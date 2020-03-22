import React from 'react';
import logo from './logo.svg';
import './App.scss';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import EndScreen from './components/EndScreen';
export default class App extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }

  constructor(props) {
    super(props);
    
    this.state = {
      current_screen: 'Question4',
      questions: this.getQuestionsData(),
      StartScreen: (<StartScreen/>),
      EndScreen: (<EndScreen/>) 
    }
    
  }

  componentDidMount(){
    this.prepareQuestions();
  }

  current_screen_set(new_screen){
    this.setState({current_screen: new_screen}, () => console.log('screen updated to ', new_screen));
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
      console.log(this.state.questions);
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
                    answers={[q.answer1,q.answer2,q.answer3,q.answer4]}/>
                )
              }, () => console.log(this.state));
            })
          })
        );
    }
  }

  render(){
    const {current_screen} = this.state;
    let view_port = this.state[current_screen];
    // let view_port = ['StartScreen', 'EndScreen'].includes(current_screen) ? this.state[current_screen];  
    console.log(this.state);
    return (
      <div className="App">
        {view_port}
      </div>
    );
  }

}