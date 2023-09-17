import './App.css';
import 'bulma/css/bulma.min.css'; //from this https://couds.github.io/react-bulma-components/?path=/story/welcome--page
import Header from "./components/Header";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
