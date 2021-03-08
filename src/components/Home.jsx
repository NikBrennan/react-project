import React from 'react';
import Layout from './shared/Layout';

const Home = () => {
    return ( 
        <Layout title="Home">
            <div className="container bg-light rounded">
                <h2 className="display-4 text-center">Welcome to my Covid-19 Data Website</h2>
                <p className="para text-center">
                    Here you can view statistics about covid-19, such as confirmed cases, recoveries, and deaths.
                </p>
                <a href="/Covid">
                    <img 
                    src="https://image.flaticon.com/icons/png/512/2785/2785819.png" 
                    alt="logo"
                    className="mx-auto d-block p-4"
                    />
                </a>
            </div>
        </Layout>
     );
}
 
export default Home;