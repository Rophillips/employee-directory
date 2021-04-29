import React, {Component}  from "react";
import './App.css';
import API from "./utils/API.js";
import EmployeeTable from "./components/EmployeeTable";
import SearchBar from "./components/SearchBar";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      items:[],
      loading: false
    }
   }

   componentDidMount() {

    // fetch("https://randomuser.me/api/")
    // .then((response) => response.json())
    API.getUsers()
    .then((response) => {
      console.log(response.data.results);
      this.setState({
        items:response.data.results,
        loading:true
      })
    })
  }

  handleRemove = id => {
    // console.log(this.state);
    this.setState({
      employees: this.state.employees.filter(employee=> employee.id !== id)
    });
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      this.getUsers(this.state.search);
    };



  render() {

    //let {items, loading} = this.state
    return (
      <>
      <div>Employee Directory</div>
      <SearchBar employees = {this.state.items}/>
      <EmployeeTable employees = {this.state.items}/>
     
      </>
    )
  }
}


export default App;
