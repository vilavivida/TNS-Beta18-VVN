import "./App.css";
import Main from "./main";
import Header from "./components/Header";
import React from "react";
import QuizButton from "./components/QuizButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <QuizButton />
    </div>
  );
}

export default App;
