import React, {useEffect, useMemo, useState} from 'react';
import Layout from './shared/Layout';
import axios from 'axios';
import './shared/stylesheet.css';

const Covid = () => {
    const options = {
        method: 'GET',
        url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
        headers: {
          'x-rapidapi-key': 'b4d1d3739cmsh9636d843997ca82p1a5452jsn0367ff5a12f3',
          'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
        }
    };

    //Store filter info
    const [searchTerm, setSearchTerm] = useState("");
    const handleChangeInput = e => {
        setSearchTerm(e.target.value);
    }

    const [sortData, setSort] = useState("");
    const handleChangeRadio = e => {
        setSort(e.target.value);
    }

    //Store original data
    const [data, setData] = useState([]);
    const covid = useMemo(() => data, [data]);

    useEffect(() => {
        axios.request(options).then(res => {
            setData(res.data.data.covid19Stats);
            console.log(res.data.data.covid19Stats);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return ( 
        <Layout title="Covid-19 Data">
            
            <div className="row equal">
                <div className="container pb-4 pt-4">
                    <input 
                        className="col-sm-4" 
                        style={{height: '30px', marginLeft: '16px'}}
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChangeInput}
                    />
                    <div id="sort-by">
                        <span className="col-sm-4">
                            Sort By:
                        </span>
                        <span className="col-sm-4">
                            <input type="radio" name="options" id="confirmed" value="confirmed" onChange={handleChangeRadio}/>
                            <label htmlFor="confirmed">Confirmed</label>

                            <input type="radio" name="options" id="recovered" value="recovered" onChange={handleChangeRadio}/>
                            <label htmlFor="recovered">Recovered</label>
                            
                            <input type="radio" name="options" id="deaths" value="deaths" onChange={handleChangeRadio}/>
                            <label htmlFor="deaths">Deaths</label>
                        </span>
                    </div>
                </div>
                {covid
                    /*  Filter by the country or by the province.
                        Country will never be null, but sometimes the province is so we ahve to check that
                    */
                    .filter(data => data.country.includes(searchTerm) || (data.province !== null && data.province.includes(searchTerm)))

                    .sort((a, b) => {
                        switch (sortData) {
                            case "recovered":
                                return b.recovered - a.recovered
                            case "deaths":
                                return b.deaths - a.deaths
                            case "confirmed":
                                return b.confirmed - a.confirmed
                            default:
                                return null
                        }
                    })
                    .map((data, i) => (
                    <div className="col-sm-4 d-flex pb-4" key={i}>
                        <div className="card card-block" style={{width: '100%'}}>
                            <div className="card-header">
                                <h2 className="display-4" style={{fontSize: '2rem'}}>
                                    {data.country}
                                    <span className="pt-3">
                                        {data.city ? data.city+', ' : null}
                                        {data.province ? data.province : null}
                                    </span>
                                </h2>

                            </div>
                            <div className="card-body">
                                <div className="card-text " style={{fontSize: '18px'}}>
                                    <p>Confimed: <span>{data.confirmed ? data.confirmed : 'N/A'}</span></p>
                                    <p>Recovered: <span>{data.recovered ? data.recovered : 'N/A'}</span></p>
                                    <p>Deaths: <span>{data.deaths ? data.deaths : 'N/A'}</span></p>
                                </div>
                            </div>
                            <div className="card-footer text-muted text-right">
                                Last Updated: {data.lastUpdate.split("T")[0]}
                            </div>
                        </div>
                    </div>
                ))
                
                }
                
            </div>
        </Layout>
     )
}
 
export default Covid;