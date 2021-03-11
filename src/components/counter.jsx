import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    }

    handleIncrement = ()=> {
        this.setState({
            value: this.state.value + 1,
        })
    }

    handleDecrement = ()=> {
        if(this.state.value > 0){
            this.setState({
                value: this.state.value - 1,
            })
        }
    }

    render() { 
        return (
            <div>
                {this.props.children}
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm mx-1">Decrement</button> 
                <span className={this.getClassesMethod()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm mx-1">Increment</button> 
            </div>
        );
    }

    getClassesMethod() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary px-4';
        return classes;
    }

    formatCount(){
        const {value} = this.state;
        return value === 0 ? 'Zero': value;
    }
}
 
export default Counter;