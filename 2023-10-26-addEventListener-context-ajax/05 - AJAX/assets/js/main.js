(() => {
    // AJAX
    // Asynchronous Javascript and XML

    // XML
    // the old way for data representation
    // in other words, an earlier version of JSON
    // which nobody likes to use anymore
    // however, there are still XML files around

    // XML vs JSON
    /*

    json:
    {
        type: "dog",
        age: 8,
        breed: "german shepherd"
    }

    XML:
    <animal>
        <type>dog</type>
        <age>8</age>
        <breed>german shepherd</breed>
    </animal>

    */

    const usersButton = document.getElementById('usersButton');
    const todosButton = document.getElementById('todosButton');

    usersButton.addEventListener('click', async () => {
        // once, to invoke an ajax call, we used something called:
        // XMLHttpRequest
        // nowadays we use the more modern fetch function
        // XMLHttpRequest used to work with callbacks
        // fetch works with promises

        // a site that demos a server: https://jsonplaceholder.typicode.com/

        // a tool to view JSON as structured data: https://jsonviewer.stack.hu/

        const users = await getDataFromServer('https://jsonplaceholder.typicode.com/users');

        displayUsers(users);

        // the same code with promises instead of async/await
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => {
        //         users.map(user => `
        //             <tr>
        //                 <td>${user.name}</td>
        //                 <td>${user.email}</td>
        //                 <td>${user.address.city}</td>
        //             </tr>
        //         `).reduce((acumulator, tr) => acumulator + tr, '')

        //         const usersTableBody = document.getElementById('usersTableBody');
        //         usersTableBody.innerHTML = reduced;
        //     })
    });

    todosButton.addEventListener('click', async () => {

        const todos = await getDataFromServer('https://jsonplaceholder.typicode.com/todos');

        displayTodos(todos);
    });

    const getDataFromServer = async (url) => {
        // fetch
        const response = await fetch(url);

        // json
        const json = await response.json();

        // return json
        return json;
    }

    const displayTodos = (todos) => {
        const reduced = todos.map(todo => `
            <tr>
                <td>${todo.userId}</td>
                <td>${todo.title}</td>
                <td><input type="checkbox" ${todo.completed ? 'checked' : ''}></td>
            </tr>
        `).reduce((acumulator, tr) => acumulator + tr, '')

        const todosTableBody = document.getElementById('todosTableBody');
        todosTableBody.innerHTML = reduced;
    }

    const displayUsers = (users) => {
        const reduced = users.map(user => `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
            </tr>
        `).reduce((acumulator, tr) => acumulator + tr, '')

        const usersTableBody = document.getElementById('usersTableBody');
        usersTableBody.innerHTML = reduced;

    }    

})();