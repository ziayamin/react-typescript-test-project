import { useState } from "react";
import "./App.css";
import List from "./components/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPoeple] = useState<IState["people"]>([
    {
      name: "Mostafa Nabavi",
      age: 25,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqG7porBCMwFKPARL0JyDIfEEMwPYtA7XEZcZ7nZD5g&s",
      note: "He is still single and looking for a partner:).",
    },
    {
      name: "Hamid Hussaini",
      age: 24,
      url: "https://avatars.githubusercontent.com/u/77102797?s=70&v=4",
      note: "He is so lucky because he is an only child:).",
    },
    {
      name: "Sayed Hasan Hussaini",
      age: 25,
      url: "https://avatars.githubusercontent.com/u/83859543?s=70&v=4",
      note: "He is very eager to learn English:).",
    },
  ]);
  return (
    <div className="App">
      <h1>People who are invited to my party.</h1>
      <List people={people} />
    </div>
  );
}

export default App;
