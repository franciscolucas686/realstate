import CardList from './components/Properties/CardList';
import Footer from './components/Footer';
import Hero from './components/Hero/Index';
import Sidebar from './components/Properties/Sidebar';

function App() {
  return (
    <>
      <Hero />
      <div className='container min-h-screen my-10 gap-10 bg-gray-100 grid grid-cols-[256px_1fr] items-center justify-center'>
        <Sidebar />
        <CardList />
      </div>
      <Footer />
    </>
  );
}

export default App;
