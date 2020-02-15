import React, {Component} from 'react';

class Search extends Component {

    state ={
        value: '',
    }

    inputHandler = (ev) => {
        this.setState({value: ev.target.value});
        // this.props.callback(this.state.value);
    }

    doSearch =() => {

        const {value} = this.state.value;

        if(value !== '' || value !== null) {
            this.props.callback(value);
        }

    }

    render() {
        return (
        <div className="search">
            <input value={this.state.value} onChange={this.inputHandler} placeholder="Search Query" type="text"/>
            <input onClick={this.doSearch} type="button" value="Search" />
        </div>

        )
    }

}

export default Search;
