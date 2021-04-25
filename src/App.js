import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
//import individual pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Project from './pages/Project';
import NoMatch from './pages/NoMatch';

function App(){
    return (
        <BrowserRouter>
            <div>
                <Wrapper>
                <Nav />
                <Switch>
                    <Route exact path={['/', '/home']}>
                        <Home />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/portfolio'>
                        <Portfolio />
                    </Route>
                    <Route exact path='/projects/:name'>
                        <Project />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
                </Wrapper>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;