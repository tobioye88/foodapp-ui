import React, { Component } from 'react'
import Table from '../../components/Table';

export default class FoodDetails extends Component {
    render() {
        return (
            <div>
                <div className="text-right">
                    <button className="btn btn-primary">Add Food to Menu</button>
                </div>
                <div>
                    <Table
                        header={["name", "price", "description", "Action"]}
                        body={this.props.foodList}
                        options={this.props.tableOptions}
                    />
                </div>
                {/* <div className="row">
                    <div className="col-6 col-md-4 mx-auto">
                        <form className="form" onSubmit={this.props.parent.onSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    className="form-control"
                                    onChange={this.props.parent.handleFoodChange.bind(this)}
                                    type="text" name="name"
                                    placeholder="Name"
                                    value={this.props.parent.state.foodRequest.meal.name} />
                            </div>
                            <div className="form-group">
                                <label>description</label>
                                <input
                                    className="form-control"
                                    onChange={this.props.parent.parenthandleFoodChange.bind(this)}
                                    type="text" name="description"
                                    placeholder="description"
                                    value={this.props.parent.state.foodRequest.meal.description} />
                            </div>
                            <div className="form-group">
                                <label>price</label>
                                <input
                                    className="form-control"
                                    onChange={this.props.parent.handleFoodChange.bind(this)}
                                    type="text" name="price"
                                    placeholder="price"
                                    value={this.props.parent.state.foodRequest.meal.price} />
                            </div>
                            <div className="form-group">
                                <label>quantity</label>
                                <input
                                    className="form-control"
                                    onChange={this.props.parent.handleFoodChange.bind(this)}
                                    type="text" name="quantity"
                                    placeholder="quantity"
                                    value={this.props.parent.state.foodRequest.meal.quantity} />
                            </div>
                            <div className="form-group">
                                <label>files</label>
                                <input
                                    className="form-control-file"
                                    onChange={this.props.parent.handleImageChange.bind(this)}
                                    type="file" name="files" />
                            </div>


                            {this.props.parent.state.foodItems.map(item => <div key={item.id}><label><input onChange={this.props.parent.onChangeFoodItemCheckBox.bind(this)} type="checkbox" name={item.name} value={item.id} /> {item.name}</label></div>)}
                            <div className="form-group">
                                <button className="btn btn-block btn-primary" type="supmit">Add Food</button>
                            </div>
                        </form>
                    </div> 
                </div> */}
            </div >
        )
    }
}
