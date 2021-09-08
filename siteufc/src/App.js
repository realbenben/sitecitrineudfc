<<<<<<< HEAD
=======
import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
>>>>>>> 5c23259ee3775ba5c2ea17c3b71b86cd3f56ec74
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import MembersPage from "./pages/MembersPage";
import StoryPage from "./pages/StoryPage";
import ContactPage from "./pages/ContactPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import NotFoundPage from "./pages/NotFoundPage";

<<<<<<< HEAD
const App = () => {
  return (
    <BrowserRouter>
=======
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        
        <BrowserRouter>
>>>>>>> 5c23259ee3775ba5c2ea17c3b71b86cd3f56ec74
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/infos" exact component={InfoPage} />
        <Route path="/membres" exact component={MembersPage} />
        <Route path="/histoire" exact component={StoryPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/inscription" exact component={SubscriptionPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
<<<<<<< HEAD
  );
};

export default App;
=======
      </>
    
  );
}

export default App;


>>>>>>> 5c23259ee3775ba5c2ea17c3b71b86cd3f56ec74
