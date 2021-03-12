import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 

        const {counters, onReset, onDecrement, onIncrement, onDelete } = this.props ;

        return (<div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button> 
            {counters.map(counter => 
            <Counter key={counter.id} id={counter.id} counter={counter} onDecrement={onDecrement} onIncrement={onIncrement} onDelete={onDelete} />)}
        </div>);
    }
}
 
export default Counters;