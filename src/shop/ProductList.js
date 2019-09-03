import React, { Component } from 'react';

export class ProductList extends Component{
    render(){
        let list = [];
        let oneRow = [];
        this.props.products && this.props.products.forEach((p, index) =>{
            let oneCard = (
                    <div className="card" key={index}>                                    
                                    <img 
                                        className="card-img-top" 
                                        src={ p.image && p.image.startsWith("http")? 
                                            p.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78S41nSNfj9PlNdlMCARFzug_aDrEe4aba3fpCkQzED9gi6mc" }
                                        alt="product"/>
                                    <div className="card-body">
                                        <h5 className="card-title"> { p.name } </h5>
                                        <p className="card-text"> { p.description } </p>
                                    </div>
                                    <div className="card-footer px-2">
                                        <h6 className="m-1">
                                            <span className="badge badge-pill badge-primary float-left pt-2 pb-2">
                                                ${ p.price.toFixed(2) }
                                            </span>
                                        </h6>
                                        <button className="btn btn-success btn-sm float-right" 
                                            onClick={()=>this.props.addToCart(p)}>Add To Cart</button>
                                    </div>
                                </div>
                );
            if((index+1)%5 === 1){
                oneRow.push(oneCard);
                return;
            }
            else if((index+1)%5 === 2){
                oneRow.push(oneCard);
                return;
            }
            else if((index+1)%5 === 3){
                oneRow.push(oneCard);
                return;
            }
            else if((index+1)%5 === 4){
                oneRow.push(oneCard);
                return;
            }
            else{
                oneRow.push(oneCard);
                list.push(<div className="card-deck mt-2" key={"p"+index}>{oneRow}</div>);
                oneRow = [];
            } 
        })
        const oneRowLength = oneRow.length;
        if(oneRowLength > 0){
            for(let i=0; i<5-oneRowLength; i++){
                oneRow.push(<div className="card border-white" key={"r"+i}></div>)
            }
            list.push(<div className="card-deck mt-2" key={"pp"}>{oneRow}</div>)
        }
        
        
        if(this.props.products == null || this.props.products.length === 0)
            return <h5 className="p-2">No Products</h5>
        return(
            <React.Fragment>
                {list}
            </React.Fragment>
        )
    }
}