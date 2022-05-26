function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if (!response.ok) {
            throw Error('error')
        }
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        const html = data.map(user => {
            return `<div class="eachtodo">${user.id}.&nbsp Todo:&nbsp ${user.title}.&nbsp&nbsp Completed: &nbsp${user.completed}</div> <br>`
        }).join('')
        console.log(html)
        document.querySelector('#todolist').insertAdjacentHTML("afterbegin", html)
    })
    .catch(error => {
        console.log(error)
    })

}

fetchData()





