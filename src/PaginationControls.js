import React, { Component } from 'react';
import { PaginationButtons } from './PaginationButtons';

export class PaginationControls extends Component{
    constructor(props){
        super(props);
        this.pageSizes = this.props.sizes || [5,10,25,100];
        this.sortKeys = this.props.keys || ["Name", "Price"];
    }

    handlePageSizeChange = (ev) => {
        this.props.setPageSize(ev.target.value);
    }

    handleSortPropertyChange = (ev) => {
        this.props.setSortProperty(ev.target.value);
    }

    render(){
        return(
            <div className="mt-3 mb-2">
                <div className="text-center m-1">
                    <PaginationButtons 
                        currentPage={this.props.currentPage}
                        pageCount={this.props.pageCount}
                        navigate={this.props.navigateToPage}/>
                    
                </div>
                <div className="form-inline justify-content-center mt-1">
                    <select className="form-control mt-1" 
                            value={this.props.pageSize || this.pageSizes[0]}
                            onChange={this.handlePageSizeChange}>
                        {this.pageSizes.map(s => 
                            <option value={s} key={s}>{s} per page</option>   
                        )}
                    </select>
                    <span className="mr-1"></span> 
                    <select className="form-control mt-1"
                            onChange={ this.handleSortPropertyChange }
                            value={ this.props.sortKey || this.sortKeys[0] }>
                        { this.sortKeys.map(k =>
                        <option value={k.toLowerCase()} key={k}>Sort By { k }</option>   
                        )}
                    </select>    
                </div>
            </div>
        )
    }
}