import React from 'react'
import {observer} from 'mobx-react'




@observer
export class TodoView extends React.Component {

    render(){
        const model = this.props.model

        return <div>
            <h1>React & Mobx Todo List</h1>

            <p>
                <button onClick={() => model.add()}>New Todo</button>
                <button onClick={() => model.load()}>Reload Todos</button>
                <button onClick={() => model.save()}>Save Todos</button>
            </p>
            {model.todos.map((todo, i) => <SingleTodoView key={todo.id} model = {model} todo={todo} />)}

        </div>
    }

}



@observer
export class SingleTodoView extends React.Component{

    render(){
        const model = this.props.model
        const todo = this.props.todo

        return <p>
            #{todo.id}
            <strong>{todo.text}</strong>
            <i>{todo.done ? 'DONE!' : ''}</i>

            <br/>

            <input type="checkbox" checked={todo.done} onChange={e => todo.done = e.target.checked} />
            <input type="text" value={todo.text} onChange={e => todo.text = e.target.value} />
            <button onClick={() => model.remove(todo)}>Delete</button>
        </p>
    }
}