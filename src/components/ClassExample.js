import React from 'react'
import Todos from './Todos'
class ClassExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Name of this component",
            counter: 0,
            todos: ["Learn JavaScript", "Learn React", "Learn Redux"]

        }
        //this.increment = this.increment.bind(this); arrow da bind a gerek yok
        //this.decrement = this.decrement.bind(this);
        //state sadece class componentlarda kullanılır.
    }

    increment = (event) => {
        // 0 dan artıya basıldı
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log("Yeni değer:", this.state.counter)
            //yeni değer 1 callback
        })
        console.log("Yeni değer:", this.state.counter)
        //yeni değer 0
    }

    decrement = (event) => {
        this.setState({
            counter: this.state.counter - 1
        }, () => {
            console.log("Yeni değer:", this.state.counter)
            //yeni değer -1 callback
        })
    }
    addTodo = newTodo => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    render() {
        // const title = this.props.title; destructing
        const { title } = this.props;
        const { name, counter } = this.state;
        //this.state.name = "Joe"; Bunu yapamayız
        //this.setState
        return (
            <div>
                Title from props: {title}
                <br />
                name from state: {name}
                <br />
                <h3>Counter: {counter}</h3>
                <button onClick={this.increment}>Arttır</button>
                <button onClick={this.decrement}>Azalt</button>
                <br />
                <Todos todos={this.state.todos} addTodo={this.addTodo} />
            </div>
        )
    }
}

export default ClassExample