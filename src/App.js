import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

function App() {
  // TODO: get props from shared state
  const success = false;
  const secretWord = "party";
  const guessedWords = [];

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords}  />
{    // look up comments section 65 when online   
   // guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]} />
}    </div>
  );
}

export default App;
