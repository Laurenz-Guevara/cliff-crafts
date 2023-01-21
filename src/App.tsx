import { Routes, Route } from 'react-router-dom';
import { Splashpage } from './pages/Splashpage';
import { Store } from './pages/Store';
import { PageNotFound } from './pages/PageNotFound';
import { Checkout } from './pages/Checkout';
import { Products } from './pages/Products';
import { Collection } from './pages/Collection';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Splashpage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/products/:slug" element={<Products />} />
          <Route path="/collection/:slug" element={<Collection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
