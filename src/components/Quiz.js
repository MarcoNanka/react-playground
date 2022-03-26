import { useState } from "react";

const Quiz = (props) => {
  const [quizzes, setQuizzes] = useState([
    {
      question: "Who is Boris Johnson",
      answer: "Current prime minister of GB",
    },
  ]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correct, setCorrect] = useState();
  const [input, setInput] = useState("");
  const quiz = quizzes[0];
  return (
    <>
      <div className="quiz">
        <h1 className="title">Quiz</h1>
        {!quiz ? (
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
    </>
  );
};

export default Quiz;
