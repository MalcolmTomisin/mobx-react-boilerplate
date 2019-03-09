import React from 'react'
import {render} from 'react-dom' 
import {TodoView} from './todoViewMaterial'
import {TodoViewModel} from './todoViewModel'

import injectTapEventPlugin from 'react-tap-event-plugin'


//injectTapEventPlugin();


const model = new TodoViewModel()

render(<TodoView model={model}/>, document.getElementById('root'))