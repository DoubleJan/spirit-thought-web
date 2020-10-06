import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '@/pages/home';
import ArticlesList from '@/pages/articlesList';
import Article from '@/pages/article';
import Admin from '@/pages/admin';

import Exception from '@/pages/exceptions';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/articlesList" exact={true} component={ArticlesList} />
        <Route path="/article" component={Article} />
        <Route path="/admin" exact={true} component={Admin} />
        <Route path="*">
          <Exception.Exception404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
