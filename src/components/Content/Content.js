import React, { Component } from "react";
import './Content.css';
import Search from '../Search/Search';
import QueryResult from '../QueryResult/QueryResult';
import API from '../../api/jokeApi';

class Content extends Component {

    state ={
        category: [],
        queryItems: [],
        randomJoke: '',
        joke: false,
        search: false,
    }

    categoryHandler(item) {
        let data = API.getRandomJoke(item);
        this.setState({
            joke: true,
            randomJoke: data.value
        });
    }

    searchQuery = (query) => {
     
        let data = API.getSearchQuery(query);
        this.setState({
            search: true,
            queryItems: data.result
        });



    }

    getCategory = ()=> {
        let data = API.getCategories('categories');
        this.setState({
            category: data
        });
    }

    componentDidMount() {
        this.getCategory();
    }

    // fetchItem = (api) => {
    //     fetch(api).then(result => result.json()).
    //     then(result => {
    //         //
    //         this.setState({
    //         })
    //     }).catch(error => console.log(error));
    // }

    render() {

        console.log(this.state.queryItems);

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
                    <QueryResult result={this.state.queryItems}></QueryResult>

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