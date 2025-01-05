abstract class BaseComponent<TConfig extends BaseConfig> implements IBaseComponent<TConfig> {
    container = undefined
    config = {} as TConfig
    defaultConfig: BaseConfig = {
        disabled: false,
        height: '100px',
        label: 'Test TextBox',
        name: 'testbox',
        width: '100px',
        visible: true,
        onContentReady: () => {},
        onInitialized: () => {},
        onValueChanged: () => {},
    }
    constructor(container: string, config: TConfig, _default: TConfig) {
        this.#validateConfig(config, _default)
        this.config = config
        this.container = document.getElementById(container)
        this.#initialize()
    }

    #validateConfig(config: TConfig, _default: TConfig) {
        // assign defaultConfig where not present
        Object.keys(_default).forEach((key) => {
            if (!config[key]) {
                config[key] = _default[key]
            }
        })

        Object.keys(this.defaultConfig).forEach((key) => {
            if (!config[key]) {
                config[key] = this.defaultConfig[key]
            }
        })
    }

    #initialize() {
        this.config.onInitialized.call(this.constructor)
    }

    get<K extends keyof TConfig>(key: K) {
        return this.config[key] as TConfig[K]
    }

    getInstance() {
        return this
    }

    getElement() {
        return this.container
    }

    set(key: keyof TConfig, value: TConfig[keyof TConfig], shouldUpdate = true) {
        this.config[key] = value
        if (shouldUpdate) this.update()
        return true
    }

    value(value?: string) {
        if (value === undefined) {
            return this.config.value
        }
        console.log(`setting value to ${value}`)
        this.config.value = value
        this.config.onValueChanged.call(this.constructor)
        this.update()
    }

    abstract update(): void
    render() {
        this.config.onContentReady.call(this.constructor)
    }
}

export default BaseComponent
