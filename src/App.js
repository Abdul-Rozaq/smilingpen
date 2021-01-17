import { Route, Switch } from "react-router-dom";
import Footer from "./Comp/Footer";
import Home from "./pages/Home";
import QuotesPage from "./pages/QuotesPage";
import SingleQuote from "./pages/SingleQuote";
import GalleryPage from "./pages/GalleryPage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/service/:name" component={ServicePage} />
        <Route path="/gallery/:name" component={GalleryPage} />
        <Route path="/:name/:id" component={SingleQuote} />
        <Route path="/:name" exact component={QuotesPage} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
