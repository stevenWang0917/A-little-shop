import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToggleLink } from './ToggleLink'

export class CategoryNavigation extends Component{
    state={ click: false}
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light m-0 p-0">
                <button className="navbar-toggler" type="button" onClick={(e)=> this.setState((state)=>({click: !state.click}))}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${this.state.click? "show":""}`}>
                    <ul className="navbar-nav flex-md-column w-100  justify-content-between">
                        <li className="nav-item">
                            <ToggleLink 
                                to={`${ this.props.baseURL }/all`} 
                                exact={false}>
                                    All
                            </ToggleLink>
                        </li>
                        { this.props.categories && this.props.categories.map(cat=>
                            <li className="nav-item" key={ cat }>
                                <ToggleLink to={ `${this.props.baseURL}/${cat.toLowerCase()}` }>
                                    {cat}
                                </ToggleLink>
                            </li>                    
                        )}
                        <br/><br/>
                        <li className="nav-item mr-3">
                            <Link 
                                className="nav-link btn btn-block btn-success m-2 text-white" 
                                to="/admin">
                                    Administration
                            </Link>
                        </li>
                    </ul>
                </div>                
            </nav>
        )
    }
}