import { Route, Switch } from "react-router-dom";
import Footer from "./Comp/Footer";
import Home from "./pages/Home";
import QuotesPage from "./pages/QuotesPage";
import SingleQuote from "./pages/SingleQuote";
import GalleryPage from "./pages/GalleryPage";

// category
// title
// image
// date
// Array of paragraphs
// comment collection

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/quote/:name/:id" component={SingleQuote} />
        <Route path="/quote/:name" exact component={QuotesPage} />
        <Route path="/:name" component={GalleryPage} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
