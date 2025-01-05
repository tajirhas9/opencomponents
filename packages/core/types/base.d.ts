interface IBaseComponent<TConfig extends BaseConfig> {
    container: string
    config: BaseConfig
    get<K extends keyof TConfig>(key: K): TConfig[K]
    getInstance(): IBaseComponent<TConfig>
    getElement(): HTMLElement
    set<K extends keyof TConfig>(key: K, value: TConfig[K], shouldUpdate: boolean): boolean
    render(): void
    value(value?: string): void
    update(): void
}

type BaseConfig = {
    disabled?: boolean
    height?: string
    label?: string
    name?: string
    onContentReady?(): void
    onInitialized?(): void
    onValueChanged?(): void
    width?: string
    value?: string
    visible?: boolean
}

type TextBoxConfig = BaseConfig & {}
