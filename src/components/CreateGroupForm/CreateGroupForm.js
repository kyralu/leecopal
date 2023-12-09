import style from "./CreateGroupForm.module.css";
import React, { useState } from "react";

export default function CreateGroupForm() {
  const [teamName, setTeamName] = useState("");

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Team Name submitted: ${teamName}`);
    // Here you can also call an API or perform other actions with the team name
  };

  return (
    <div className={style.background}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Create New Group 🕺🏻</h2>
        <label className={style.label} htmlFor="teamName">Group Name</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={handleInputChange}
          className={style.input}
        />
        <button type="submit" className={style.submitButton}>Submit</button>
      </form>
    </div>
  );
}
