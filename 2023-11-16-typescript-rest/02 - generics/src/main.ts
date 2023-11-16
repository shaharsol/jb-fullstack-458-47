export function log<T>(value: T) {
    console.log(value);
}

class Example {
    a: number;
    b: string;
}



log(123) // for this single invocation, MyNewType is number
log('sdsdf') // for this single invocation, MyNewType is string
log<object>({});
log({}); // object type is implicit

log<number>(123);
log<string>(123); // wrong. param should be a string
log<string>('123');
log<Example>(new Example());