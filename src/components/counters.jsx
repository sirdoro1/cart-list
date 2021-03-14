import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 

        const {counters, onReset, onDecrement, onIncrement, onDelete,onAdd} = this.props ;

        return (<div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button> 
            <button onClick={onAdd} className="btn btn-outline-primary btn-sm m-2">Add Counter</button> 
            {counters.map(counter => 
            <Counter key={counter.id} id={counter.id} counter={counter} onDecrement={onDecrement} onIncrement={onIncrement} onDelete={onDelete} />)}
        </div>);
    }
}
 
export default Counters;