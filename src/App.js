import './App.css';
import WeightInput from './components/WeightInput/WeightInput';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <div className="content">
        <WeightInput />
        <Footer />
      </div>
    </div>
  );
}

export default App;
