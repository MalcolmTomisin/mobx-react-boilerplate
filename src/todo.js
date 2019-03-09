import {observable, computed} from 'mobx'

var _id = 0;
function nextId(){_id++; return _id}

//model class
export default class Todo {

        id = nextId;

        @observable text = ''

        @observable done = false

        @computed get isValid (){
                return this.text !== ''
        }

        serialize(){
                return{
                        id: this.id,
                        text : this.text,
                        done : this.done
                }
        }

        static deserialize(json: Object){
                const todo = new Todo()
                todo.id = json['id']  || nextId()
                todo.text = json['text'] || ''
                todo.done = json['done'] || false
                return todo
        }
        
}