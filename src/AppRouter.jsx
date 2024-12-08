import {Routes, Route} from "react-router-dom";
import {HomePage, QuizPage} from "./pages";
import {Navbar} from "./components/Navbar";
import {CreateQuiz} from "./pages/CreateQuiz";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:quiz" element={<QuizPage />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
      </Routes>
    </>
  );
};
