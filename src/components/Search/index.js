import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

class Search extends Component
{

    state = {
        filmes: [],
    }

    componentDidMount()
    {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`deputados/`);

        const { docs } = response.data;

        console.log(response.data);
        this.setState({ filmes: response.data.dados });
    }
  

    render()
    {   
        const {filmes} = this.state;
        
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    
                </div>
                <div className="col-md-4"></div>
            </div>
            {
                filmes.map((filme, k) => (
                    <div className="row" id="card" key={k}>
                        <div className="col-md-3">
                            <img src={`${filme.urlFoto}`} id="img" />
                        </div>
                        <div className="col-md-7">
                            <h3>Deputado: { filme.nome }</h3>
                            <p><b>Partido: </b> { filme.siglaUf } - { filme.siglaPartido }</p>
                            <p><b>Email: </b> <a href='#'> { filme.email } </a></p>
                        </div>
                        <div className="col-md-2">
                            <h6>Score</h6>
                            
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Search;
