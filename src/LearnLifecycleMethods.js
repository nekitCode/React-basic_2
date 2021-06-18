import React from 'react';

class LifeCycleMethods extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: [1,2,3],
        }
        this.addNumber = this.addNumber.bind(this);
        console.clear()
        console.log('constructor');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log(prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    addNumber() {
        const randNumber = Math.round(Math.random() * 10);
        this.setState({number: [...this.state.number, randNumber]});
    }

    render() {
        console.log('render')
        return (
            <div className='wrap'>
                <div>
                    <ul style={{listStyle: 'none'}}>
                        {this.state.number.map((num, index) => {
                            return <li key={index}>{num}</li>
                        })}
                    </ul>
                    <button className='btn-newNum' onClick={this.addNumber}>New number</button>
                </div>
            </div>
        )
    }
}

export default LifeCycleMethods;