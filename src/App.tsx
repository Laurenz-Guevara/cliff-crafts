import { Routes, Route } from 'react-router-dom';
import { Splashpage } from './pages/Splashpage';
import { Store } from './pages/Store';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <>
      {/* <NavBar>
        <NavItem icon="😁" />
        <NavItem icon="😁" />
        <NavItem icon="😁" />
      </NavBar> */}
      <Routes>
        <Route path="/" element={<Splashpage />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
