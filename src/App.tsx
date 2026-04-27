import { Route, Routes } from 'react-router-dom';
import { FloatingBottomNav } from '@/components/layout/floating-bottom-nav';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { HomePage } from '@/pages/home-page';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-24 md:pb-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingBottomNav />
    </div>
  );
}

export default App;
