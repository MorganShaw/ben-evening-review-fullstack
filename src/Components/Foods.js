import React, {Component} from 'react'
import axios from 'axios'
import Food from './Food'
import FoodClass from './FoodClass'
import AddFood from './AddFood'

class Foods extends Component{
    constructor(props){
        super(props)
        this.state = {
            food: []
        }
    }
    componentDidMount(){
        axios.get('/api/food')
        .then((response) => {
            this.setState({food: response.data})
        })
        .catch(err => console.log(err))
    }

    deleteFood = (id) => {
        axios.delete(`/api/food/${id}`)
        .then((response) => {
            this.setState({food: response.data})
        })
        .catch(err => console.log(err))
    }

    addFood = (name) => {
        axios.post(`/api/food`, {name})
        .then((response) => {
            this.setState({
                food: response.data
            })
        }).catch(err => console.log)
    }

    editFood = (id, name) => {
        axios.put(`/api/food/${id}`, {name})
        .then((response) => {
            this.setState({food: response.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Foods</h1>
                <AddFood addFood={this.addFood} />
                {this.state.food.map((element) => {
                    return <FoodClass 
                    info={element} 
                    key={element.id} 
                    deleteFood={this.deleteFood}
                    editFood={this.editFood}
                     />
                })}
            </div>
        )
    }
}

export default Foods
