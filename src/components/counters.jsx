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
    render() { 
        return (<div>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} value={counter.value}>
                <h4 className="text-primary">Counter #{counter.id}</h4>
            </Counter>)}
        </div>);
    }
}
 
export default Counters;