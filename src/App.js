import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters'


class App extends Component {
  state = {  
        counters: [
            {id:1, value: 3},
            {id:2, value: 4},
            {id:3, value: 5},
            {id:4, value: 6},
            {id:5, value: 3},
        ],
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({
            counters
        })
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        if(counters[index].value > 0){
            counters[index].value--;
            this.setState({
                counters
            })
        }
    }

    handleDelete = id => {
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(query =>{
            query.value = 0;
            return query;
        });

        this.setState({
            counters
        })
    }

    render() { 
      return ( <React.Fragment>
        <Navbar totalCounter={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
        </main>
      </React.Fragment> );
    }
}
 
export default App;