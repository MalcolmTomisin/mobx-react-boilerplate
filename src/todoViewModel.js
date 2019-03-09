import {observable, action} from 'mobx'
import Todo from './todo'

export class TodoViewModel {
    @observable todos = []

    constructor(){
        this.load()
    }

    @action
    add (){
        const newTodo = new Todo();
        
        this.todos.push(newTodo)
        return newTodo
    }

    @action
    remove (todo: Todo){
        const index = this.todos.indexOf(todo)
        if(index > -1){
            this.todos.splice(index, 1)
        }
    }

    @action 
    save (){
        if(this.todos.filter(todo => todo.isValid === false).length > 0){
            alert("Unable to save: There are invalid Todos.")
        }

        if(window.localStorage){
            window.localStorage.setItem(
                "todos",
                JSON.stringify(
                    this.todos.map(todo => todo.serialize())
                )
            )
        }
    }


    @action
    load(){
        // if the browser has support for localStorage, try to retrieve the saved todos
        if(window.localStorage){
            const json = JSON.parse(window.localStorage.getItem("todos") || "[]")

            // Notice: the todo => Todo.deserialize(todo) is an ES2015 arrow function
            this.todos = json.map(todo => Todo.deserialize(todo))
        }
    }

}