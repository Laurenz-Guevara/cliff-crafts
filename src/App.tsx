import { Routes, Route } from 'react-router-dom';
import { Splashpage } from './pages/Splashpage';
import { Store } from './pages/Store';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splashpage />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
