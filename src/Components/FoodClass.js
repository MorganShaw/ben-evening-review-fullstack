import React, { Component } from "react"

class FoodClass extends Component {
  constructor(props) {
    super(props)
    const {name} = this.props.info
    this.state = {
      edit: false,
      name: name,
    }
  }

  handleChange = (value) => {
      this.setState({name: value})
  }

  toggleEdit = () => {
      this.setState({edit: !this.state.edit})
  }

  saveFood = () => {
      this.props.editFood(this.props.info.id, this.state.name)
      this.toggleEdit()
  }

  render() {
    return (
      <div>
        {this.state.edit ? (
          <div>
              <input value={this.state.name} onChange={(e) => this.handleChange(e.target.value)} />
              <button onClick={this.toggleEdit}>Cancel</button>
              <button onClick={this.saveFood}>Save</button>
          </div>
        ) : (
          <div>
            <h2>{this.props.info.name}</h2>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={() => this.props.deleteFood(this.props.info.id)}>
              Delete
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default FoodClass