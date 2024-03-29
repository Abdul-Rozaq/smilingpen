import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import QuotesPage from "./pages/QuotesPage";
import SingleQuote from "./pages/SingleQuote";
import GalleryPage from "./pages/GalleryPage";
import ServicePage from "./pages/ServicePage";
import Admin from "./pages/Admin";
import NewQuote from "./Comp/NewQuote";
import NewWotd from "./Comp/NewWotd";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin/post/:name/:id?" component={NewQuote} />
        <Route path="/admin/word-of-the-day/new" component={NewWotd} />
        <Route path="/admin/:name?" component={Admin} />
        <Route path="/service/:name" component={ServicePage} />
        <Route path="/gallery/:name" component={GalleryPage} />
        <Route path="/:name/:id" component={SingleQuote} />
        <Route path="/:name" component={QuotesPage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
