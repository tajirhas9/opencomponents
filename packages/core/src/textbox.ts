import BaseComponent from './_base'

export default class TextBox extends BaseComponent<TextBoxConfig> {
    constructor(container: string, config: TextBoxConfig) {
        const _default = {
            disabled: false,
            height: '100px',
            label: 'Test TextBox',
            name: 'testbox',
            width: '100px',
            value: 'Testing textbox value',
            visible: true,
            onContentReady: () => {},
            onInitialized: () => {},
            onValueChanged: () => {},
        }
        super(container, config, _default)
        this.render()
    }
    render() {
        const hasContainer = this.container.querySelector(`#${this.container.getAttribute('id')}-holder`)
        if (hasContainer) {
            hasContainer.remove()
        }
        const container = window.document.createElement('div')
        container.setAttribute('id', `${this.container.getAttribute('id')}-holder`)
        const input = window.document.createElement('input')
        input.value = this.config.value

        container.appendChild(input)
        this.container.appendChild(container)

        super.render()
    }

    update() {
        console.log(`updating textbox`)
        this.render()
    }
}
