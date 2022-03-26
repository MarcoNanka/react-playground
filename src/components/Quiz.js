import { useState } from "react";

const Quiz = (props) => {
  const [quizzes, setQuizzes] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correct, setCorrect] = useState();
  const [input, setInput] = useState("");
  const [otherinput, setOtherInput] = useState("");
  const [question, setQuestion] = useState("");
  const [create, setCreate] = useState(true);
  const quiz = quizzes[0];
  return (
    <>
      <div className="quiz">
        <h1 className="title">Quiz</h1>
        {create ? (
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
            <button>{!question ? "Enter answer" : "save"}</button>
          </form>
        ) : !quiz ? (
          "no questions left"
        ) : (
          <div>
            <div>
              <p>{quiz.question}</p>
            </div>
            {showAnswer ? (
              <div>
                <p>{quiz.answer}</p>
                <p>{correct ? "korrekt" : "falsch"}</p>
                <button
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
                  }}
                >
                  next question
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault(); //verhindert neuladen von Seite
                  setCorrect(input === quiz.answer);
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
          </div>
        )}
      </div>
      <button onClick={() => setCreate(create ? false : true)}>
        {create ? "Start questioning" : "Start creating new fancy quizzes"}
      </button>
    </>
  );
};

export default Quiz;
