import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ['Juventus','Manchester United','Real Madrid','Paris Saint Germanin','Dortmount']
    }

    handleIncrement = ()=> {
        this.setState({
            count: this.state.count + 1,
        })
    }

    handleDecrement = ()=> {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1,
            })
        }
    }

    render() { 
        return (
            <div>
                <button onClick={this.handleDecrement} style={{fontSize:10, fontWeight:'bold'}} className="btn btn-secondary btn-sm mx-1">Decrement</button> 
                <span className={this.getClassesMethod()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} style={{fontSize:10, fontWeight:'bold'}} className="btn btn-secondary btn-sm mx-1">Increment</button> 
            </div>
        );
    }

    getClassesMethod() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;