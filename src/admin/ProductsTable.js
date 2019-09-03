import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PaginationControls } from "../PaginationControls";
import { ProductsRow } from "./ProductsRow";

export class ProductsTable extends Component {
    render = () =>
        <React.Fragment>
            <h5 className="bg-secondary text-white text-center mt-2 p-2">
                {this.props.totalSize} Product(s)
            </h5>
            <div className="mx-2">
                <PaginationControls key={["ID", "Name", "Category"] } {...this.props}/>
                <table className="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th className="text-right">Price</th>
                            <th className="text-center">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(prod => 
                            <ProductsRow 
                                key={ prod.id } 
                                product={ prod } 
                                deleteProduct={ this.props.deleteProduct }/>
                            )}
                    </tbody>
                </table>
            </div>
            <div className="text-center">
                <Link to="/admin/products/create" className="btn btn-primary">Create Product</Link>
            </div>
        </React.Fragment>
}