import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/userAction';
import './style.css';
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            inpt:''
        }
    }
    onAutoComplete(e){
        this.setState({inpt:e.target.value});

        
        this.props.fetchUsers(e.target.value);

    }
    render(){
        return(
        <div className="row">
        <div className="col-sm-12 search-box">
        <form >
       <input type="text" name="searchName" id="searchField" onKeyUp={this.onAutoComplete.bind(this)}  placeholder="Search.."/>
       <button  className="search-btn"  ><i className="fa fa-search"></i></button>
       </form>
       </div>
      </div>
        )
    }
}

const mapStateToProps=state=>({
    users:state.users.userList
});

export default connect(mapStateToProps,{fetchUsers})(Search);