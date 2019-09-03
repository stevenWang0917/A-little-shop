import React, { Component } from "react";
import { OrdersRow } from "./OrdersRow";
import { PaginationControls } from "../PaginationControls";

export class OrdersTable extends Component {
    render = () => 
        <React.Fragment>
            <h5 className="bg-secondary text-white text-center mt-2 p-2">
                {this.props.totalSize} Order(s)
            </h5>
            <div className="mx-2">
                <PaginationControls keys={["ID", "Name"]} {...this.props}/>
                <table className="table table-sm table-striped">
                    <thead>
                        <tr><th>ID</th>
                            <th>Name</th><th>Email</th>
                            <th className="text-right">Total</th>
                            <th className="text-center">Shipped</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.orders.map(order =>
                            <OrdersRow 
                                key={ order.id }
                                order={ order} 
                                toggleShipped={()=>this.props.toggleShipped(order.id, !order.shipped)}
                            />
                        )
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
}