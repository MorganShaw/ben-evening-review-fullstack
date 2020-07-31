import React, {Component} from "react";

class AddFood extends Component {
    constructor(){
        super()
        this.state = {
            name: ""
            //put here the things that will go into our new object (our new food item)
        }
    }
    
    handleChange = (value) => {
        this.setState({name: value})
    }

    saveFood = () => {
        this.props.addFood(this.state.name)
        this.setState({name: ""})
    }

    render(){
        return (
            <div>
                <input 
                    value={this.state.name} 
                    onChange={(e) => this.handleChange(e.target.value)}/>
                <button onClick={this.saveFood}>Add Food</button>
            </div>

        )
    }
}

export default AddFood


// saveFood = (e) => {
//     e.prevent.Default()
//     this.props.addFood(this.state.name)
//     this.setState({name: ""})
// }

// render(){
//     return (
//         <div>
//             <form onSubmit = {(e) => this.saveFood(e)}>
//             <input value={this.state.name} onChange={(e) => this.handleChange(e.target.value)}/>
//             <button onClick={this.saveFood}>Add Food</button>
//             </form>
//         </div>

//     )
// }
