import React, { Component } from 'react';
import { CONFIG } from '../components/Config';

export default class Dashboard extends Component {

    state = {
        foodRequest: {
            meal: { name: 'Test food', description: 'Test description', price: 1000, quantity: 1 },
            foodItemsIds: [],
            // files: []
        },
        foodItems: [],
        formData: new FormData()
    }

    getFormData() {
        let formData = this.state.formData;
        formData.append('request', new Blob([JSON.stringify(this.state.foodRequest)], { type: "application/json" }));
        return formData;
    }

    componentWillMount() {
        fetch(`${CONFIG.baseRoute}/v1/food_items/all`)
            .then(response => response.json())
            .then(data => {
                this.setState({ ...this.state, foodItems: data })
            })
    }

    handleFoodChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        const foodRequest = this.state.foodRequest;
        foodRequest.meal[name] = value
        this.setState({ ...this.state, foodRequest });
    }

    onSubmit(e) {
        e.preventDefault();
        fetch(`${CONFIG.baseRoute}/v1/menu/add`, {
            method: 'post',
            body: this.getFormData()
        })
            .then(response => response.json())
            .then(data => console.log('data-', data))
            .catch(e => console.log(e));
    }

    onChangeFoodItemCheckBox(e) {
        const value = e.target.value;

        if (e.target.checked) {
            const foodItemsIdSet = new Set(this.state.foodRequest.foodItemsIds);
            foodItemsIdSet.add(value);
            console.log('ids', foodItemsIdSet);

            const foodRequest = this.state.foodRequest;
            foodRequest.foodItemsIds = [...foodItemsIdSet];
            this.setState({ ...this.state, foodRequest })
        } else {
            const index = this.state.foodRequest.foodItemsIds.indexOf(value);
            if (index >= 0) {
                console.log('removed', value);

                this.state.foodRequest.foodItemsIds.splice(index, 1);
                console.log('ids', this.state.foodRequest.foodItemsIds);
                this.setState({ ...this.state });
            }
        }

    }

    handleImageChange(e) {
        const file = e.target.files[0];
        // console.log(file);

        // const foodRequest = this.state.foodRequest;
        // foodRequest.files.push(e.target.files);
        const formData = this.state.formData;
        formData.append('files', file);

        this.setState({ ...this.state, formData });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Dashboard</h1>
                    <div className="row">
                        <div className="col-6 col-md-4 mx-auto">
                            <form className="form" onSubmit={this.onSubmit.bind(this)}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        className="form-control"
                                        onChange={this.handleFoodChange.bind(this)}
                                        type="text" name="name"
                                        placeholder="Name"
                                        value={this.state.foodRequest.meal.name} />
                                </div>
                                <div className="form-group">
                                    <label>description</label>
                                    <input
                                        className="form-control"
                                        onChange={this.handleFoodChange.bind(this)}
                                        type="text" name="description"
                                        placeholder="description"
                                        value={this.state.foodRequest.meal.description} />
                                </div>
                                <div className="form-group">
                                    <label>price</label>
                                    <input
                                        className="form-control"
                                        onChange={this.handleFoodChange.bind(this)}
                                        type="text" name="price"
                                        placeholder="price"
                                        value={this.state.foodRequest.meal.price} />
                                </div>
                                <div className="form-group">
                                    <label>quantity</label>
                                    <input
                                        className="form-control"
                                        onChange={this.handleFoodChange.bind(this)}
                                        type="text" name="quantity"
                                        placeholder="quantity"
                                        value={this.state.foodRequest.meal.quantity} />
                                </div>
                                <div className="form-group">
                                    <label>files</label>
                                    <input
                                        className="form-control"
                                        onChange={this.handleImageChange.bind(this)}
                                        type="file" name="files" />
                                </div>

                                {this.state.foodItems.map(item => <div key={item.id}><label><input onChange={this.onChangeFoodItemCheckBox.bind(this)} type="checkbox" name={item.name} value={item.id} /> {item.name}</label></div>)}
                                <div className="form-group">
                                    <button className="btn btn-block btn-primary" type="supmit">Add Food</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

