import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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

    handleDelete = (id) =>{
        const counter = this.state.counters.filter(c => c.id !== id);
        this.setState({counters:counter});
    }

    render() { 
        return (<div>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} counter={counter} onDecrement={()=> this.handleDecrement(counter)} onIncrement={()=> this.handleIncrement(counter)} onDelete={() => this.handleDelete(counter.id)} />)}
        </div>);
    }
}
 
export default Counters;