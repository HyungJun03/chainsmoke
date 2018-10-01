import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route ,Link } from 'react-router-dom';
import Personal from './Routes/Personal';
import App from './Components/App';
import Home from './Routes/Home'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route exact path="/" component={Home} />
            <Route path="/personal" component={Personal} />
                
        </div>
     </BrowserRouter>,

    
    
    
    document.getElementById('root')
);
