import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import { Container } from 'react-bootstrap';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import SinglePost from './components/pages/SinglePost/SinglePost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import CategoriesForm from './components/features/CategoriesForm/CategoriesForm';

const App = () => {
  return (
    <main>
    <Container>
      <Header />
      <Routes>
        <Route path="/category/:categoryName" element={<CategoriesForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
    </main>
  );
};

export default App;
