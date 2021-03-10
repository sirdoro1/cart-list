import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ['Juventus','Manchester United','Real Madrid','Paris Saint Germanin','Dortmount']
    }

    render() { 
        return (
            <div>
                <span className={this.getClassesMethod()}>{this.formatCount()}</span>
                <button style={{fontSize:10, fontWeight:'bold'}} className="btn btn-secondary btn-sm">Increment</button> 
                <ul>
                    {this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
                </ul>
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