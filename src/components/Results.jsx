import React from "react";
import {FcComboChart} from "react-icons/fc";

export const Results = ({score, questions, isShowAnswers}) => {
  console.log(score);
  console.log(questions);

  const percentScore = ((score / questions.length) * 100).toFixed(0);

  return (
    <div
      className="container flex flex-col items-center my-5"
      style={{height: "calc(100vh - rem)"}}
    >
      <div className="flex flex-col justify-evenly items-center shadow shadow-slate-500 w-[500px] h-[480px] rounded-lg gap-3">
        <h1 className="text-3xl text-teal-900 font-bold">Resultados</h1>
        {percentScore >= 50 ? (
          <span className="text-8xl">😀</span>
        ) : (
          <span className="text-8xl">😊</span>
        )}

        <div className="flex flex-col gap-4 text-teal-700 text-center text-lg font-bold">
          <span>Acertaste</span>
          <span className="font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse">
            {percentScore}%
          </span>
          de las preguntas ({score} de {questions.length})
        </div>
        {isShowAnswers && (
          <button className="text-white bg-gray-900 px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900">
            Mostrar Respuestas
          </button>
        )}
      </div>
    </div>
  );
};
