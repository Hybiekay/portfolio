import { Route, Routes } from 'react-router-dom';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { HomePage } from '@/pages/home-page';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
