import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
        const {onDecrement, onIncrement,onDelete, id, counter} = this.props;
        return (
            <div>
                <button onClick={()=> onDecrement(counter)} className="btn btn-secondary btn-sm mx-1">Decrement</button> 
                <span className={this.getClassesMethod()}>{this.formatCount()}</span>
                <button onClick={()=> onIncrement(counter)} className="btn btn-secondary btn-sm mx-1">Increment</button> 
                <button onClick={ () => onDelete(id) } className="btn btn-danger btn-sm mx-1">Delete</button> 
            </div>
        );
    }

    getClassesMethod() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary px-4';
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero': value;
    }
}
 
export default Counter;