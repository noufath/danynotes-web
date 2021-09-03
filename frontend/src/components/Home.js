import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
    <div className='container'>
        <div className="jumbotron">
            <h1 className="display-4">Wolcome to Dany Notes</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
            <p>Click the button bellow to check out our awesome blog</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our Blog</Link>
        </div>
    </div>
);

export default Home;