import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import { PageRoute } from './pages/Page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<PageRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
