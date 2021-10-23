import React from "react";
import { QuizData } from "./QuizData";
import BottomPage from "./BottomPage";
import NavBar from "./Navbar";
import Title from "./Title";

export default class Quiz extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			userAnswer: null,
			currentIndex: 0,
			options: [],
			quizEnd: false,
			score: 0,
			disabled: true,
		}
	}

	loadQuiz = () => {
		const {currentIndex} = this.state;
	
		this.setState(() => {
			return {
				question: QuizData[currentIndex].question,
				options: QuizData[currentIndex].options,
				answer: QuizData[currentIndex].answer
				
			}
		})
	}

	nextQuestionHandler = () => {
		const {userAnswer, answer, score} = this.state
	
		this.setState  ({
			currentIndex: this.state.currentIndex + 1,
			userAnswer: null,
			score: userAnswer === answer ? score + 1 : score
		})	
		
	}

	componentDidMount(){
		this.loadQuiz();
	}

	checkAnswer = answer => {
		this.setState ({
			userAnswer: answer,
			disabled: false,
		})
	}

	componentDidUpdate = (preProp, prevState) => {
		const {currentIndex} = this.state;
		if (this.state.currentIndex !== prevState.currentIndex){
			this.setState(() => {
				return {
					question: QuizData[currentIndex].question,
					options: QuizData[currentIndex].options,
					answer: QuizData[currentIndex].answer,
					
				}
			});
		}	
	}
	
	finishHandler = () => {
		if(this.state.currentIndex === QuizData.length -1){
			this.setState({
				
				quizEnd: true,
			})
		}
	}
	
	render(){
		const {question, options, currentIndex, userAnswer, quizEnd} = this.state

		if(quizEnd){
			return(
				<div>

					<Title />
					<NavBar />
					<br /><br />
					<h2>Quiz Results</h2>
					<br />
					<h2>You scored {this.state.score} out of 4</h2>
					
					<ul>
						{QuizData.map((item, index) => (
							<ol className="options"
								key={index}>
						 {item.question}  <h5 className="quiz-answers">Correct Answer: {item.answer}</h5>
							</ol> 
						))}
					</ul>
					<br/><br /><BottomPage />
				</div>
			);
		}
		return(
			<div>
				<Title />
				<NavBar />
				<br /><br />
				<h2>Indica vs Sativa Quiz</h2>
					<br />
				<h4>{question}</h4>
				<span>{`${currentIndex + 1} of ${QuizData.length}`}</span>
				<br />
				{this.score}
				{
					options.map(option => 
						<p 
							key={option.id}
							className={`options ${userAnswer === option ? "selected" : null} `} 
							onClick = {() => this.checkAnswer(option)}>
							{option}
						</p>
					)
				}

					{currentIndex < QuizData.length -1 && 
						<button
							className="btn btn-success"
							disabled = {this.state.disabled}
							onClick = {this.nextQuestionHandler}>
							Next Question 
						</button>}

					{currentIndex === QuizData.length -1  &&
						<button
							onClick={this.finishHandler} disabled = {this.state.disabled} className="btn btn-dark">
							Finish
						</button>
					}		
					<br /><br /><br /><BottomPage />
			</div>
		);

	}

}
