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
      current_screen: 'StartScreen',
      questions: this.getQuestionsData()
    }
  }


  getQuestionsData(){
    //let r = fetch()
    let r;
    return r;
  }


  renderQuestions(){
    // if(this.state.questions){
    //   this.state.questions.map( q => {
    //     return (
    //       <QuestionScreen
    //         q="q.text"
    //         number={q.number}
    //         answers={q.answers}

    //         />
    //     );
    //   })
    // }
  }

  render(){
    return (

      <div className="App">
        <EndScreen/>
      </div>
    );
  }

}