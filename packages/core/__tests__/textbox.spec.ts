// sum.test.js
import { beforeEach, describe, expect, test } from 'vitest'
import { TextBox } from '../index'

interface TestContext {
    textBox: TextBox
}

describe('TextBox', () => {
    beforeEach<TestContext>((context) => {
        const container = document.createElement('div')
        container.setAttribute('id', 'container')
        document.body.appendChild(container)
        context.textBox = new TextBox('container', {})
    })
    test<TestContext>('should be defined', ({ textBox }) => {
        expect(textBox.getInstance()).toBeInstanceOf(TextBox)
    })
    test<TestContext>('should have dom element', ({ textBox }) => {
        expect(textBox.getElement()).toBeInstanceOf(HTMLElement)
    })
    test<TestContext>('value can be updated', ({ textBox }) => {
        const changedBySetter = 'testing getter-setter'
        textBox.set('value', changedBySetter)
        expect.soft(textBox.get('value')).toBe(changedBySetter)

        const changedByValueMethod = 'testing value method'
        textBox.value(changedByValueMethod)
        expect.soft(textBox.value()).toBe(changedByValueMethod)
    })

    test<TestContext>('should have an input element', ({ textBox }) => {
        expect(textBox.getElement().querySelector('input')).toBeInstanceOf(HTMLInputElement)

        // change value
        textBox.value('new value')
        expect(textBox.getElement().querySelector('input').value).toBe('new value')
    })
})
