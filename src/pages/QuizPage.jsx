import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {quizzes} from "../data";
import {Question, Results} from "../components";
import {HiOutlineSpeakerXMark, HiOutlineSpeakerWave} from "react-icons/hi2";

//Prevent Refresh
export const QuizPage = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = e => {
    e.preventDefault();
    e.returnValue = "";
  };

  //States
  const [activeResults, setActiveResults] = useState(false);
  const [score, setScore] = useState(0);

  const [activateQuiz, setActivateQuiz] = useState(false);

  //Read URL Params
  const {quiz} = useParams(); //{quiz: '2'} // quiz id es 2

  //Filter quiz
  const quizSelected = quizzes.filter(item => item.id == quiz);

  const {course, title, image, sound, questions, isShowAnswers} =
    quizSelected[0];

  //Timer
  const timer = quizSelected[0].isMinutes;
  const minutes = quizSelected[0].timerMinutes;
  const seconds = quizSelected[0].timerSeconds;

  //Questions
  const [indexQuestion, setIndexQuestion] = useState(0);

  return (
    <>
      {activeResults ? (
        <Results
          score={score}
          questions={questions}
          isShowAnswers={isShowAnswers}
        />
      ) : (
        // Quiz
        <>
          {activateQuiz ? (
            <div
              className="container flex flex-col items-center my-5"
              style={{height: "calc(100vh - rem)"}}
            >
              <div className="flex flex-col shadow shadow-slate-500 w-[800px] h-[480px] p-10 rounded-lg">
                {/* Header  */}
                <div className="flex justify-between">
                  <span className="font-bold">Pregunta</span>
                  {/* Timer */}
                  {timer != "notMinutes" && (
                    <span className="font-bold">
                      {minutes || "00"}:{seconds || "00"}
                    </span>
                  )}
                  {/* Sound */}
                  <button className="text-2xl">
                    {sound != "off" ? (
                      <HiOutlineSpeakerXMark className="text-slate-600" />
                    ) : (
                      <HiOutlineSpeakerWave />
                    )}
                  </button>
                </div>
                {/* Question */}
                <Question
                  question={questions[indexQuestion]}
                  setIndexQuestion={setIndexQuestion}
                  indexQuestion={indexQuestion}
                  questions={questions}
                  setActivateQuiz={setActivateQuiz}
                  setActiveResults={setActiveResults}
                  score={score}
                  setScore={setScore}
                />
              </div>
            </div>
          ) : (
            //   DesactivateQuiz
            <>
              <div className="flex flex-col items-center mx-auto w-80 mt-10">
                <h1 className="text-3xl text-teal-900 text-center font-bold">
                  {course}
                </h1>
                <h2 className="text-xl text-teal-700 text-center font-semibold">
                  {title}
                </h2>
                <div className="flex justify-center items-center rounded-lg">
                  <img src={image} alt={course} className="w-72" />
                </div>
                <button
                  onClick={() => setActivateQuiz(true)}
                  className="w-1/2 text-white bg-gray-900 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
                >
                  Iniciar examen
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
