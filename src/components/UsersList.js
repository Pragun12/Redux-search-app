import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/userAction';
import './style.css';

class UsersList extends Component{

    render(){
        let usersInfos;

        if(this.props.users.length===0 ){
            usersInfos='No Users available.';
        }
        else if(this.props.users.message==='Validation Failed'){
            usersInfos='No Users available.';
        }
        else{
            
            let i=0
            usersInfos=this.props.users.items.map(user=>{
             
              return(
              <div   key={user.login} className={"col-sm-4  user-record User"+(i++===0?' active':'')}>
                <a href={'https://github.com/'+user.login}>
                <img src={user.avatar_url} className="img-responsive" width="180"/>
                <span> {user.login} </span>
                 </a>
                
                </div>
              
              
            );
      
         
            });
        
           
          }

          return (
      
            <div>
             {usersInfos}
            </div>
          );
        
        }

}

const mapStateToProps=state=>({
    users:state.users.userList
});

export default connect(mapStateToProps,{fetchUsers})(UsersList);