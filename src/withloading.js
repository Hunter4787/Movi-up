import React from 'react';
import Spinner from './spinner'

const WithLoading=(WrappedComponent)=>{
return class WithLoading extends React.Component{
    render(){
        return (this.props.isLoading) ? <div className="spinner-style"><Spinner/></div> : <div><WrappedComponent {...this.props}/></div>
    }
}
}
export default WithLoading;