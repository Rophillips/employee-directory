import React, {Component}  from "react";
import './App.css';
import API from "./utils/API.js";
import EmployeeTable from "./components/EmployeeTable";
import SearchBar from "./components/SearchBar";

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
      console.log(response);
      this.setState({
        items:response.data.results,
        loading:true
      })
    })
  }
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
