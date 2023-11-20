export default class Backup<T>{
    subject: string;
    value: T;

    public constructor(subject: string, value: T) {
        this.subject = subject;
        this.value = value;
    }
}

const obj = new Backup<number>('weight', 2)
const obj2 = new Backup<string>('weight', '2')
const obj3 = new Backup<{ name: string, age: number }>('kitten', { name: 'kit', age: 2 })
