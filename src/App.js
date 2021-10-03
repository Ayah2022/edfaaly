// import logo from './logo.svg';
import './Sass/App.scss';
import Category from './Components/Category.js'

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-5">Our e-commerce store</h1>
      <h5 className="text-center mt-1">Choose one of our categories from below</h5>
      <Category />
    </div>
  );
}

export default App;
