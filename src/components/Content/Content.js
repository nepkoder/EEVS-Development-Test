import React, { Component } from "react";
import './Content.css';
import Search from '../Search/Search';
import QueryResult from '../QueryResult/QueryResult';
import BASE_URL from '../../api/jokeApi';

class Content extends Component {

    state ={
        category: [],
        queryItems: [],
        randomJoke: '',
        joke: false,
        search: false,
    }

    componentDidMount() {
        this.getCategories('categories');
    }

    categoryHandler(item) {
        this.getRandomJoke(item)

    }

    searchQuery = (query) => {
        if(query.length > 0) {
            this.getSearchQuery(query);
        }
    }

    // fetching endpoint
    getCategories = (endpoint) => {
        fetch(BASE_URL + endpoint).then(res => res.json()).then(result => {
           this.setState({category: result});
       }).catch(error => console.log(error));
   }
   
   getRandomJoke =(category) => {
       let randomCategory = BASE_URL + `random?category=${category}`;
           fetch(randomCategory).then(res => res.json()).then(result => {
            this.setState({
                joke: true,
                randomJoke: result.value
            })
        }).catch(err => err);
   }
   
   getSearchQuery =(query) => {
       let searchUrl = BASE_URL + `search?query=${query}`;
       fetch(searchUrl).then(res => res.json())
           .then(result => {
            this.setState({
                search: true,
                queryItems: result.result,
                resultTotal: result.total
            });
           }).catch(err => err);
   }

    render() {

        return(
            <div className="main">

                <Search callback={this.searchQuery}></Search>

                <hr/>

                {
                    !this.state.search ?

                    <div className="app-content">

                    <h3>{ this.state.joke ? 'Random Joke' : 'Choose Category' }</h3>

                {
                    this.state.joke ? 
                    
                    <div>
                        <p>{this.state.randomJoke}</p>
                    </div>

                     :

                    <div className="item">

                    <ul>
                        {
                        this.state.category.map( (item, i) => {
                            return (<li onClick={() => this.categoryHandler(item)} key={i}>{item}</li>)
                        })
                        }
                    </ul>

                </div>

                }

                </div>

                    :
                    <QueryResult count={this.state.resultTotal} result={this.state.queryItems}></QueryResult>

                }

                {
                    this.state.search || this.state.joke ?
                    <button onClick={()=> this.setState({joke:false, search:false, randomJoke:'', queryItems:[]})} className="back-btn">BACK</button>
                    :
                    null
                }

            </div>
        );
    }

}

export default Content;