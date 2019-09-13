import React, { Component } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Details from './Details';
import FoodDetails from './FoodDetails';
import FoodService from '../../services/FoodService';
import FoodItemService from '../../services/FoodItemService';
import { Modal, Utils } from '../../components/Utils';
import { CONFIG } from '../../config/Config';
import FoodCategoryService from '../../services/FoodCategoryService';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            foodRequest: {
                food: { name: 'Test food', description: 'Test description', price: 1000, categories: [] },
                foodItemsIds: [],
                categoryIds: [],
            },
            pathname: props.history.location.pathname,
            foodItems: [],
            foodList: [],
            foodCategories: [],
            foodCategoryList: [],
            showEditModal: false,
            formData: new FormData()
        }
        // this.handleDelete = this.handleDelete.bind(this);
        this.unlisten = props.history.listen((({ pathname }) => this.setState({ ...this.state, pathname })));
        this.handleEdit = this.handleEdit.bind(this);
    }

    navLinks = [
        { to: "/admin", friendlyName: "Dashboard" },
        { to: "/admin/food", friendlyName: "Foods" },
        { to: "/admin/orders", friendlyName: "Orders" },
    ]

    getFormData() {
        let formData = this.state.formData;
        formData.append('request', new Blob([JSON.stringify(this.state.foodRequest)], { type: "application/json" }));
        return formData;
    }

    componentDidMount() {
        FoodService.getAll(1,
            data => this.setState({ ...this.state, foodList: data }),
            error => { console.log(error) });

        FoodItemService.getAll(1,
            data => {
                this.setState({ ...this.state, foodItems: data })
            },
            () => { });

        FoodCategoryService.getAll(1,
            data => {
                this.setState({ ...this.state, foodCategories: data })
            },
            error => console.log(error));

    }
    componentWillUnmount() {
        this.unlisten()
    }

    handleFoodChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        const foodRequest = this.state.foodRequest;
        foodRequest.food[name] = value
        this.setState({ ...this.state, foodRequest });
    }

    onSubmit(e) {
        e.preventDefault();
        FoodService.add(this.getFormData(),
            (data) => {
                alert("Done");
                console.log(data);
                let newFoodList = this.state.foodList;
                newFoodList.unshift(data)
                this.setState({ ...this.state, foodList: newFoodList })
            },
            e => console.log(e));
    }

    onChangeCategoryCheckBox(e) {
        const id = e.target.value;
        let categoryIdsSet = new Set(this.state.foodRequest.categoryIds);

        if (e.target.checked) {
            categoryIdsSet = Utils.addToSet(id, categoryIdsSet);
        } else {
            categoryIdsSet = Utils.removeFromSet(id, categoryIdsSet);
        }

        let foodRequest = this.state.foodRequest;
        foodRequest.categoryIds = categoryIdsSet;
        this.setState({ ...this.state, foodRequest });
    }

    onChangeFoodItemCheckBox(e) {
        const id = e.target.value;
        let foodItemsIdSet = new Set(this.state.foodRequest.foodItemsIds);

        if (e.target.checked) {
            foodItemsIdSet = Utils.addToSet(id, foodItemsIdSet);
        } else {
            foodItemsIdSet = Utils.removeFromSet(id, foodItemsIdSet);
        }

        let foodRequest = this.state.foodRequest;
        foodRequest.foodItemsIds = foodItemsIdSet;
        this.setState({ ...this.state, foodRequest });

    }

    handleImageChange(e) {
        const file = e.target.files[0];
        const formData = this.state.formData;
        formData.append('files', file);

        this.setState({ ...this.state, formData });
    }

    toggleEditModal() {
        document.body.classList.toggle("modal-open", !this.state.showEditModal);
        this.setState({ ...this.state, showEditModal: !this.state.showEditModal });
    }

    handleEdit = (id) => {
        let food = this.state.foodList.find((food) => food.id === id);
        let foodRequest = this.state.foodRequest;
        foodRequest.food = food;
        this.state.foodItems.forEach(el => el.isChecked = false);
        this.state.foodCategories.forEach(el => el.isChecked = false);
        food.foodItems.forEach((el) => this.state.foodItems.find((elm) => elm.id === el.id).isChecked = true);
        food.categories.forEach(el => this.state.foodCategories.find(elm => elm.id === el.id).isChecked = true);

        this.setState({ ...this.state, foodRequest });
        this.toggleEditModal();
    }

    handleDelete = (id) => {
        console.log(this.state);
        FoodService.delete(id,
            data => {
                const { foodList } = this.state;
                const newFoodList = foodList.filter(food => food.id !== id);
                this.setState({ ...this.state, foodList: newFoodList });
                alert(data);
            },
            (error) => console.log(error));
    }

    tableOptions = {
        showButton: true,
        buttons: [
            { class: 'btn btn-outline-primary btn-sm ml-2', text: 'Edit', func: this.handleEdit },
            { class: 'btn btn-outline-danger btn-sm ml-2', text: 'Delete', func: this.handleDelete }
        ]
    }

    onSubmitEdit = () => {
        console.log(this.state.foodRequest);
        console.log("Saving...");
        FoodService.putWithPath(`${CONFIG.baseRoute}/v1/menu/edit`, JSON.stringify(this.state.foodRequest),
            data => {
                console.log(data);
                let foodList = this.state.foodList;
                foodList.map(food => (food.id === data.id) ? data : food)
                this.setState({ ...this.state, foodList });
                alert("Updated SuccessFully")
            },
            error => {
                alert("Error");
                console.log(error);
            })

    }

    modalButtons = [
        { class: 'btn btn-success ml-2', text: 'Save Changes', func: this.onSubmitEdit }
    ]

    isFoodItemChecked(id) {
        console.log(this.state.foodRequest.foodItemsIds.contains(id));
        return this.state.foodRequest.foodItemsIds.contains(id);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>Dashboard</h1>
                    <div className="row">
                        <div className="col-3">
                            <ul className="nav flex-column">
                                {this.navLinks.map((link, i) => (
                                    <li className="nav-item" key={i}>
                                        <Link className={link.to === this.state.pathname ? "nav-link nav-round-right active" : "nav-link nav-round-right "} to={link.to}>{link.friendlyName}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-9">
                            <Switch>
                                <Route exact path="/admin" render={Details} />
                                <Route path="/admin/food" render={() => <FoodDetails foodList={this.state.foodList} tableOptions={this.tableOptions} />} />
                            </Switch>
                        </div>
                    </div>
                </div>
                {this.showEditModal()}
            </div >
        );
    }

    showEditModal() {
        if (this.state.showEditModal) {
            return (
                <Modal
                    buttons={this.modalButtons}
                    title={"Edit " + this.state.foodRequest.food.name}
                    show={this.state.showEditModal}
                    toggleEditModal={this.toggleEditModal.bind(this)}>
                    <form className="form" onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                className="form-control"
                                onChange={this.handleFoodChange.bind(this)}
                                type="text" name="name"
                                placeholder="Name"
                                value={this.state.foodRequest.food.name} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                className="form-control"
                                onChange={this.handleFoodChange.bind(this)}
                                type="text" name="description"
                                placeholder="description"
                                value={this.state.foodRequest.food.description} />
                        </div>
                        <div className="form-grop form-row">
                            <div className="col-6">
                                <p className="m-0">Food Item</p>
                                <p className="m-0 text-right"><button className="btn btn-sm btn-link">+ Add Food item</button></p>
                                {this.state.foodItems.map(
                                    item => (
                                        <div key={item.id}>
                                            <label>
                                                <input
                                                    defaultChecked={item.isChecked}
                                                    onChange={this.onChangeFoodItemCheckBox.bind(this)}
                                                    type="checkbox"
                                                    name={item.name}
                                                    value={item.id} /> <span>{item.name}</span> <small className="text-muted">{Utils.formatMoney(item.price)}</small></label>
                                        </div>))}
                            </div>
                            <div className="col-6">
                                <p className="m-0">Category</p>
                                <p className="m-0 text-right"><button className="btn btn-sm btn-link">+ Add to Category</button></p>
                                {this.state.foodCategories.map(
                                    item => (
                                        <div key={item.id}>
                                            <label>
                                                <input
                                                    defaultChecked={item.isChecked}
                                                    onChange={this.onChangeCategoryCheckBox.bind(this)}
                                                    type="checkbox"
                                                    name={item.name}
                                                    value={item.id} /> <span>{item.name}</span></label>
                                        </div>))}
                            </div>
                        </div>

                    </form>
                </Modal>
            )
        }
    }
}

