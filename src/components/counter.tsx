import * as React from "react";

interface CounterState {
    count: number
}

class Counter extends React.Component<{}, CounterState> {
    state = {
        count: 0
    }
    
    constructor(props: {}) {
        super(props);
    }

    render() {
        return <button onClick={this.iterCount} >{this.state.count}</button>
    }

    iterCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
}

export default Counter