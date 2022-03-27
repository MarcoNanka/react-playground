import { useState, useEffect } from "react";

const Quiz = (props) => {
  const [quizzes, setQuizzes] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correct, setCorrect] = useState();
  const [wrong, setWrong] = useState();
  const [input, setInput] = useState("");
  const [otherinput, setOtherInput] = useState("");
  const [question, setQuestion] = useState("");
  const [create, setCreate] = useState(true);
  const [initialRender, setInitialRender] = useState(false);
  useEffect(() => {
    const ls = localStorage.getItem("quizzes");
    if (!initialRender) {
      if (ls) setQuizzes(JSON.parse(ls));
      setInitialRender(true);
    } else {
      localStorage.setItem("quizzes", JSON.stringify(quizzes));
    }
  }, [quizzes, initialRender]);
  const quiz = quizzes[0];

  return (
    <>
      <div className="quiz">
        <h1 className="title">Quiz</h1>
        {create ? (
          <div className="createQuiz quizTemplates">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (otherinput) {
                  if (question) {
                    const newQuizzes = [...quizzes];
                    newQuizzes.push({ question, answer: otherinput });
                    setQuizzes(newQuizzes);
                    setQuestion("");
                  } else {
                    setQuestion(otherinput);
                  }
                  setOtherInput("");
                }
              }}
            >
              <input
                value={otherinput}
                onChange={(e) => setOtherInput(e.target.value)}
                type="text"
                placeholder={question ? "Create answer" : "Create question"}
              />
              <button>{question ? "save" : "Enter answer"}</button>
            </form>
            <span>Number of created quizzes: </span>
            <span className="numberQuizzes">{quizzes.length}</span>
          </div>
        ) : !quiz ? (
          <div className="quizTemplates">No question left!</div>
        ) : (
          <div
            className={
              correct
                ? "quizTemplates correctAnswer"
                : wrong
                ? "quizTemplates wrongAnswer"
                : "quizTemplates"
            }
          >
            <div>
              <span style={{ borderBottom: "solid" }}>Question</span>
              <span>: {quiz.question}</span>
            </div>
            {showAnswer ? (
              <div>
                <p>
                  {correct
                    ? "That's correct: " + quiz.answer
                    : "False, the correct answer is: " + quiz.answer}
                </p>
                <button
                  className="nextQuestion"
                  onClick={() => {
                    const newQuizzes = [...quizzes];
                    if (correct) {
                      newQuizzes.splice(0, 1);
                    } else {
                      newQuizzes.push(newQuizzes[0]);
                      newQuizzes.splice(0, 1);
                    }
                    setQuizzes(newQuizzes);
                    setShowAnswer(false);
                    setCorrect(false);
                    setWrong(false);
                  }}
                >
                  next question
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault(); //verhindert neuladen von Seite
                  setCorrect(
                    input.toLowerCase().split(" ").join("") ===
                      quiz.answer.toLowerCase().split(" ").join("")
                  );
                  setWrong(correct ? false : true);
                  setShowAnswer(true);
                  setInput("");
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Your answer"
                />
                <button>Submit</button>
              </form>
            )}
            <span>Number of quizzes left: </span>
            <span className="numberQuizzes">{quizzes.length}</span>
          </div>
        )}
      </div>
      <button
        className="quizButton"
        onClick={() => setCreate(create ? false : true)}
      >
        {create ? "Start questioning" : "Create new quizzes"}
      </button>
    </>
  );
};

export default Quiz;
