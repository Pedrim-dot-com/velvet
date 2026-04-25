import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { PageRoute } from './pages/Page';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pages/:slug" element={<PageRoute />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
