interface ListenerInterface {
    (): void
};

export default class {
    private listeners: { [eventName: string]: Array<ListenerInterface> } = {};

    public addListener(eventName: string, callable: ListenerInterface): void {
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(callable);
    };

    public runEvent(eventName: string): void {
        this.listeners[eventName].forEach((callable) => {
            callable();
        });
    };
};