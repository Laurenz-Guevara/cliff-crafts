import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
