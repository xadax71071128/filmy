import react, {useState} from 'react';
import './App.css';

function App() {
  // stany przechowujące dane formularza
  const [tytuł, setTytuł] = useState("");
  const [rodzaj,setRodzaj] = useState("")
  // funkcja obsługująca przycisk "dodaj"
 const handleSubmit = (e) => {
  e.preventdefault(); //zapobiega odświeżaniu strony po kliknięciu

  //wyświetlanie danych formularza w konsoli
    console.log(`Tytuł: ${tytuł},rodzaj: ${rodzaj}`);
  };

  return (
    <div className="App">
      <div class="mb-3">
        <label for="film" class="form-label">tytuł filmu</label>
        <input type="text" class="form-control" id="film" />
      </div>
      <select class="form-select" aria-label="Default select example">
        <option selected>wybierz menu</option>
        <option value="1">komedia</option>
        <option value="2">obyczajowy</option>
        <option value="3">sensacyjny</option>
      </select>
     <div><button type="submit" class="btn btn-primary">submit</button></div>
    </div>
  );
}

export default App;
