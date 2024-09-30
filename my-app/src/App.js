import react, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // stany przechowujące dane formularza
  const [tytuł, setTytuł] = useState("");
  const [rodzaj,setRodzaj] = useState("")
  // funkcja obsługująca przycisk "dodaj"
 const handleSubmit = (e) => {
  e.preventDefault(); //zapobiega odświeżaniu strony po kliknięciu

  //wyświetlanie danych formularza w konsoli
    console.log(`Tytuł: ${tytuł},rodzaj: ${rodzaj}`);
  };

  return (
    <div className="App">
      <div class="mb-3">
        <label for="film" className="form-label">tytuł filmu</label>
        <input type="text" className="form-control" id="film" />
      </div>
      <select className="form-select" aria-label="Default select example">
        <option selected>wybierz menu</option>
        <option value="1">komedia</option>
        <option value="2">obyczajowy</option>
        <option value="3">sensacyjny</option>
      </select>
     <div><button type="submit" class="btn btn-primary" onClick={handleSubmit}>submit</button></div>
    </div>
  );
}

export default App;
