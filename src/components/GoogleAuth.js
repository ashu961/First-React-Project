import React from 'react';

class GoogleAuth extends React.Component{
    state={isSignedIn: null};
    componentDidMount(){
    window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId: '235725614406-8m7enon6rhhq4j4b94c8c9vqqsm989a3.apps.googleusercontent.com',scope: 'email'
        }).then(()=>{
            this.auth=window.gapi.auth2.getAuthInstance();
            this.onAuthChange();
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
}
onAuthChange=()=>{
    this.setState({ isSignedIn : this.auth.isSignedIn.get()});
};
OnSignOut=()=>{
    this.auth.signOut();
}
OnSignIn=()=>{
    this.auth.signIn();
}

renderAuthButton(){
    if(this.state.isSignedIN === null){
        return null
    } else if (this.state.isSignedIn){
        return (
            <button onClick={this.OnSignOut} className="ui google button">
                <i className="google icon" />
                Sign Out
            </button>
        );
    }
    else {
        return(
            <button onClick={this.OnSignIn} className="ui google button">
                <i className="google icon" />
                Sign In
            </button>
        );
    }
}
    
    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;