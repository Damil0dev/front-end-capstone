import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {ReservationPage} from "./pages/ReservationPage"

function App() {
  return (
    <div className='flex flex-col gap-10'>
      <div>
        <Header />
        <ReservationPage />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
