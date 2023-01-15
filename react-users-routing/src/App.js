import './App.css';
import { Container} from "@mui/material";
import Header from "./modules/common/components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./modules/home/pages/Home";
import UsersModules from "./modules/users/pages/UsersModules";
import UsersList from "./modules/users/pages/UsersList";
import UserForm from "./modules/users/pages/UserForm";
function App() {
  return (
      <Container maxWidth="sm">
          <Header />
          <Routes>
            <Route path={'/'} element={< Home />}></Route>
              <Route path={'/users'} element={< UsersModules />}>
                  <Route path={''} element={<UsersList />} />
                  <Route path={':id'} element={<UserForm />} />
              </Route>
          </Routes>
      </Container>
      );
}

export default App;
