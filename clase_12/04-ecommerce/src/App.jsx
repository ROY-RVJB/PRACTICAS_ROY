import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListProductView from './views/ListProductView';
import Navigation from './components/Navigation';
import CreateProductView from './components/CreateProductView';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ListProductView />} />
        <Route path="/createproduct" element={<CreateProductView />} />
      </Routes>
    </Router>
  );
}

export default App;