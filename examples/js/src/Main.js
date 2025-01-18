import { TextBox } from '@opencomponents/core'
const app = document.getElementById('app')

const container = document.createElement('div')
container.setAttribute('id', 'textbox-container')
app.appendChild(container)
const textBox = new TextBox('textbox-container', {})

textBox.render()
