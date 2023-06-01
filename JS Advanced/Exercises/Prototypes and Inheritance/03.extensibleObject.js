function extensibleObject() {
    let instance = {};
    let proto = {};

    Object.setPrototypeOf(instance, proto);

    instance.extend = function (temp) {
        Object.entries(temp).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                instance[key] = value;
            }
        });
    }

    return instance;
}

