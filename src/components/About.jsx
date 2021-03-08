import React from 'react';
import Layout from './shared/Layout';

const About = () => {
    return ( 
        <Layout title="About">
            <div className="container bg-light rounded p-2 border border-secondary">
                <h2 className="display-4 text-center">How to use this website</h2>
                <p className="para text-center">
                    In the input box you can filter the data based on country or province/state.
                </p>
                <p className="para text-center">
                    Furthermore, you can sort the data based on confirmed cases, recoveries, or deaths but selecting
                    one of the radio buttons.
                </p>
            </div>
        </Layout>
     );
}
 
export default About;