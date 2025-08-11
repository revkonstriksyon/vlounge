import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/events" component={Events} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;