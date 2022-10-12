import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";
import CourseGoalsList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Item 1", id: "1" },
    { text: "Item 2", id: "2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => {
        return goal.id !== goalId;
      });
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one ?</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalsList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
