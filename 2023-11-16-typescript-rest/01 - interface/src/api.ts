interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// type is very similar to interface, but cannot be used in OOP
type Todo2 = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

class Myclass implements Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

class MyClass2 implements Todo2 {

}

(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json: Todo[] = await response.json();
    console.log(json[0].title)
})();
