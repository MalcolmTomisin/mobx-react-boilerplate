import React from 'react'
import {observer} from 'mobx-react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

const buttonStyle = {
  margin: 12,
};

@observer
export class TodoView extends React.Component{
    
    render(){
        const model = this.props.model

        
        return <MuiThemeProvider>
            <div>
                <h1>React & MobX Todo List!</h1>
                <div>
                    <RaisedButton onClick={() => model.add()}  primary={true} style={buttonStyle} label="New" />
                    <RaisedButton onClick={() => model.load()} secondary={true} style={buttonStyle} label="Load" />
                    <RaisedButton onClick={() => model.save()} style={buttonStyle} label="Save" />
                </div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Done?</TableHeaderColumn>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Actions</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {model.todos.map((todo, i) => <SingleTodoView key={todo.id} model={model} todo={todo} />)}
                    </TableBody>
                </Table>
            </div>
        </MuiThemeProvider>
    }
}

//updates in todo re-renders singletodoview
@observer
export class SingleTodoView extends React.Component{

    render(){
        const model = this.props.model
        const todo = this.props.todo

        return <TableRow striped={todo.done} displayBorder={false}>
                    <TableRowColumn>
                        <Checkbox checked={todo.done} onCheck={e => {todo.done = e.target.checked}} />
                    </TableRowColumn>
                    <TableRowColumn>
                        #{todo.id}
                    </TableRowColumn>
                    <TableRowColumn>
                        <TextField name="text" type="text" value={todo.text} onChange={e => {todo.text = e.target.value}} fullWidth={true} />
                    </TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton onClick={() => model.remove(todo)} label="Delete" />
                    </TableRowColumn>
                </TableRow>
    }
}