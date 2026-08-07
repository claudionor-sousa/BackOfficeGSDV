import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Autenticacao } from '../pages/Autenticacao';
import { Home } from '../pages/Home/inde';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autenticacao />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
