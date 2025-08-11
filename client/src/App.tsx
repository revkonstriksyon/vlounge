import { Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { LanguageProvider } from './contexts/LanguageContext';
import { queryClient } from './lib/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="min-h-screen bg-black text-white flex flex-col">
          <Switch>
            {/* Admin routes */}
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/admin/dashboard" component={AdminDashboard} />
            
            {/* Public routes */}
            <Route path="/" component={() => (
              <>
                <Header />
                <main className="flex-1 pt-20">
                  <Home />
                </main>
                <Footer />
              </>
            )} />
            <Route path="/menu" component={() => (
              <>
                <Header />
                <main className="flex-1 pt-20">
                  <Menu />
                </main>
                <Footer />
              </>
            )} />
            <Route path="/events" component={() => (
              <>
                <Header />
                <main className="flex-1 pt-20">
                  <Events />
                </main>
                <Footer />
              </>
            )} />
            <Route path="/gallery" component={() => (
              <>
                <Header />
                <main className="flex-1 pt-20">
                  <Gallery />
                </main>
                <Footer />
              </>
            )} />
            <Route path="/contact" component={() => (
              <>
                <Header />
                <main className="flex-1 pt-20">
                  <Contact />
                </main>
                <Footer />
              </>
            )} />
          </Switch>
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;