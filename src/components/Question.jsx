import {useState} from "react";

export const Question = ({
  question,
  setIndexQuestion,
  indexQuestion,
  questions,
  setActivateQuiz,
  setActiveResults,
  score,
  setScore,
}) => {
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);

  //Next question
  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
  };

  //Answers
  const answerValues = Object.values(question.choices); // []

  //Check Answers
  const letters = ["a", "b", "c", "d"];
  const checkAnswer = index => {
    if (question.correctAnswer === letters[index]) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index);
    setAnswered(true);
  };

  return (
    <>
      <div className="flex flex-col justify-between w-auto h-[400px] mt-0">
        <div className="flex justify-between">
          {/* Current Question Number and Total Question Number */}
          <span className="text-lg font-bold">
            {indexQuestion + 1} / {questions.length}{" "}
          </span>
        </div>
        {/* Question */}
        <div>
          <h1 className="text-lg font-bold text-center -mt-7 ">
            {question.mainQuestion}
          </h1>
        </div>

        {/* Answers */}
        <div className="grid grid-cols-2 gap-5">
          {/* Array of answers */}
          {answerValues.map((answer, index) => (
            <button
              className={`border-2 p-5 rounded-lg flex justify-center items-center hover:scale-105
                ${
                  selectAnswerIndex !== null && index === selectAnswerIndex
                    ? question.correctAnswer === letters[index]
                      ? "bg-green-400 "
                      : "bg-red-400 "
                    : ""
                }
                `}
              key={index}
              onClick={() => checkAnswer(index)}
              disabled={answered && selectAnswerIndex !== index}
            >
              <p className="font-medium text-center text-base">{answer}</p>
            </button>
          ))}
        </div>
        {/* Conditional to display the next question button or the end button */}

        {indexQuestion + 1 === questions.length ? (
          <button
            onClick={() => {
              setAnswered(false);
              setActiveResults(true);
            }}
            disabled={!answered}
            className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
          >
            Finalizar
          </button>
        ) : (
          <button
            className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
            onClick={onNextQuestion}
            disabled={!answered}
          >
            Siguiente Pregunta
          </button>
        )}
      </div>
    </>
  );
};
