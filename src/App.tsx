import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContainerWrapper, Footer, Navbar } from './components';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <ContainerWrapper>
        <main className="py-10">{}</main>
      </ContainerWrapper>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
