import React, { Component }  from "react";
import './App.css';
import API from "./utils/API.js";
import EmployeeTable from "./components/EmployeeTable";
import SearchBar from "./components/SearchBar";
import 'bootstrap/dist/css/bootstrap.css';
//import './index.css';


class App extends Component {

  // constructor(props){
  //   super(props)
    // this.state = {
   state = {
      items:[],
      loading: false
    }
   

   componentDidMount() {

    // fetch("https://randomuser.me/api/")
    // .then((response) => response.json())
    API.getUsers()
    .then((response) => {
      console.log(response.data.results);
      this.setState({
        items:response.data.results,
        loading:true,
        search: ""
      })
    })
  }



  handleInputChange = event => {
    const name = event.target.name;
    const value= event.target.value;
    this.setState({
      [name]: value
    });
  };

    // When the form is submitted, search the Random API for `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      console.log(this.state.search);
      let search = this.state.search.toLowerCase();
      //this.getUsers(this.state.search);
      //console.log(this.state);
      let filteredEmployees = this.state.items;
      filteredEmployees = filteredEmployees.filter(employee => {
        console.log(employee);
        return (
          employee.name.first
          .toLowerCase()
          .includes(search) ||
          employee.name.last
          .toLowerCase()
          .includes(search) ||
          employee.email 
          .toLowerCase()
          .includes(search) ||
          employee.cell
          //.toLowerCase()
          .includes(search)
        )}
      )
      console.log(filteredEmployees);
       
     
    };

    handleSort = (key, asc) => {
      // copy
      let employeeSorted = [...this.state.items];
      
      // sort by key and asc
      employeeSorted.sort( (a, b) => {
        return a[key] > b[key] ? asc * 1 : asc * -1;
      });
  
      // set the state
      this.setState({ items: employeeSorted });
    }

    handleSort2 = (key, key2, asc) => {
      // copy
      let employeeSorted = [...this.state.items];
      
      // sort by key and asc
      employeeSorted.sort( (a, b) => {
        return a[key][key2] > b[key][key2] ? asc * 1 : asc * -1;
      });
  
      // set the state
      this.setState({ items: employeeSorted });
    }

    handleRemove = id => {
      // console.log(this.state);
      this.setState({
        employees: this.state.employees.filter(employee=> employee.id !== id)
      });
    }
  

  render() {
    let filteredEmployees = this.state.items;
    if (this.state.search){

  
    let search = this.state.search.toLowerCase();
   
    filteredEmployees = filteredEmployees.filter(employee => {
      //console.log(employee);
      return (
        employee.name.first
        .toLowerCase()
        .includes(search) ||
        employee.name.last
        .toLowerCase()
        .includes(search) ||
        employee.email 
        .toLowerCase()
        .includes(search) ||
        employee.cell
        //.toLowerCase()
        .includes(search)
      )}
    )}
    //let {items, loading} = this.state
    return (
      <>
      <div className="form-control">Employee Directory</div>
   
      <button onClick={() => this.handleSort2("name", "first", 1)}>Sort Alphabetically by First Name</button>
      <button onClick={() => this.handleSort2("name", "last", 1)}>Sort Alphabetically by Last Name</button>
      {this.state.items.map}
      <SearchBar search={this.state.search} submit= {this.handleFormSubmit} handleInputChange ={this.handleInputChange} handleSort={this.handleSort} />
      <EmployeeTable search={this.state.search} employees = {filteredEmployees} handleRemove={this.handleRemove} handleSort={this.handleSort} />
     
      </>
    )
  }
}


export default App;
