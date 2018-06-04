import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/userAction';
import './style.css';
class NextPrev extends Component{
    
    prevNext(e){
        let bid=e.target.id;
        
        var userRecords=document.getElementsByClassName("user-record");
        for(var i=0;i<userRecords.length;i++){
          if(userRecords[i].classList.contains("active")){
            if(bid==="previousBtn"){
    
              if(i===0)
              break;
              
          userRecords[i-1].className+=' active';
          }
          else{

            if(i===(userRecords.length-1))
            break;
    
        userRecords[i+1].className+=' active';
        }
        userRecords[i].className =  userRecords[i].className.replace(" active", "");
        break;
           }
        }

       }

    render(){
        

            if(this.props.users.length===0){
                return (<div></div>)
            }
            else if(this.props.users.message==='Validation Failed'){
                return (<div></div>)
            }
            else{
                return (
                    <div className="NextPrev">
                    <div className="row">
                    <div className="col-sm-12 text-center">
                    <button type="button" className="btn btn-primary" id="previousBtn" onClick={this.prevNext.bind(this)} >  Prev </button> 
                    <button type="button" className="btn btn-primary" id="nextBtn" onClick={this.prevNext.bind(this)}  >Next  </button>
                    </div>
                    </div>
                    
                    </div>
                );
              }
              
        
       
    }
}

const mapStateToProps=state=>({
    users:state.users.userList
});

export default connect(mapStateToProps,{fetchUsers})(NextPrev);