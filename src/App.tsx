import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContainerWrapper } from './components';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ContainerWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContainerWrapper>
    </BrowserRouter>
  );
}

export default App;
