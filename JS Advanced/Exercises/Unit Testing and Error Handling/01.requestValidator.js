function solve(object) {

    if (object.method !== 'GET' && object.method !== 'POST' && object.method !== 'DELETE' && object.method !== 'CONNECT' || object.method === undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (object.uri === undefined || !/^([a-zA-Z0-9\.]+|\*)$/g.test(object.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (object.version !== 'HTTP/0.9' && object.version !== 'HTTP/1.0' && object.version !== 'HTTP/1.1' && object.version !== 'HTTP/2.0' || object.version === undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (object.message === undefined || object.message != '' && !/^[^<>\\&'"]*$/gm.test(object.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}
