import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        agenda: 2,
    }

     style = {
         fontSize:20,
         fontWeight:'bold',
     };

    render() { 
        return (
            <div>
                <span style={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button style={{fontSize:10, fontWeight:'bold'}} className="btn btn-secondary btn-sm">Increment</button> 
            </div>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;