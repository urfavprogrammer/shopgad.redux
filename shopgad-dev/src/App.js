import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components/index';
import './App.css';


function App() {
  return (
    <div className="App poppins-regular">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
