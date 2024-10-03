import About from './components/about';
import Appmenu from './components/app';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Offers from './components/offer';
import ReserveTable from './components/reservation';
import SignatureDishes from './components/signature-dishes';
import './index.css';

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <SignatureDishes />
     <Offers />
     <Appmenu />
     <ReserveTable />
     <Footer />
    </div>

  )
}
export default App;
