import React, {Component} from 'react';
import CardList from './Component/CardList';
import {robots} from './robots';
import SearchBox from './Component/SearchBox';
import Scroll from './Component/Scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }

    handleChange = (event) =>{
        this.setState({searchfield: event.target.value});
        console.log(event.target.value);
    }

    render(){
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        });
        return(
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange ={this.handleChange}/> 
            <Scroll>
                <CardList robots ={filterRobots} />
            </Scroll>
            
        </div>

        )}
}

export default App;