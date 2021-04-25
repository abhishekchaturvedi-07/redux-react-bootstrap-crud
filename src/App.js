import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/coreComponents/navbar/Navbar";
import { Provider } from "react-redux";
import "./styles/App.scss";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/addContact/AddContact";
import EditContact from "./components/editContact/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
