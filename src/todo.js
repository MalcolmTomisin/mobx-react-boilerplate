import {observable, computed} from 'mobx'


var num = function foo() {

        if( typeof foo.counter == 'undefined' ) {
            foo.counter = 0;
        }
        return foo.counter++;
    }


//model class
export default class Todo {

        @observable id = num()

        @observable text = ''

        @observable done = false

         


        serialize(){
                return{
                        id: this.id , 
                        text : this.text,
                        done : this.done
                }
        }

        static deserialize(json: Object){
                const todo = new Todo()
                todo.id = json['id']  || this.id
                todo.text = json['text'] || ''
                todo.done = json['done'] || false
                return todo
        }
        
}