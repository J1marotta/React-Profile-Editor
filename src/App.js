import React, { Component } from 'react';
import './App.css';
import Show from './Show'
import EditFirst from './EditFirst'
import EditLast from './EditLast'
import EditUrl from './EditUrl'

class App extends Component {
  // Model


  state = {
    user: {
      chosenNumb: null,
      firstName: 'Alice',
      lastName: 'Jones',
      profileImageURL: `https://randomuser.me/api/portraits/women/15.jpg`
    }
  }

  // Controller actions

  // When user types in text field
  // This function is called
  // The event provides information about what happened
  onChangeFirstName = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newFirstName = input.value
    // Make changes to the state
    this.setState((prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      const newUser = { ...user, firstName: newFirstName }
      return {
        // this.state.user will be updated
        user: newUser
      }
    })
  }

  // Controller actions

  // When user types in text field
  // This function is called
  // The event provides information about what happened
  onChangeLastName = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newLastName = input.value
    // Make changes to the state
    this.setState((prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      const newUser = { ...user, lastName: newLastName }
      return {
        // this.state.user will be updated
        user: newUser
      }
    })
  }

  // When user types in text field
  // This function is called
  // The event provides information about what happened
  onChangeUrlField = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const chosenNumb = input.value
    // Make changes to the state
    this.setState((prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      const newUser = { ...user, profileImageURL: `https://randomuser.me/api/portraits/women/${chosenNumb}.jpg` }
      return {
        // this.state.user will be updated
        user: newUser

      }
    })
  }






  // View

  render() {
    const user = this.state.user

    return (
      <div className="App">
      <Show {...user}/>

      <EditFirst {...user} onChangeFirstName={(event) => {this.onChangeFirstName(event)}} />
      <EditLast {...user} onChangeLastName={(event) => {this.onChangeLastName(event)}} />
      <EditUrl {...user} onChangeUrlField={(event) => {this.onChangeUrlField(event)}} />
      </div>
    );
  }
}

export default App;
