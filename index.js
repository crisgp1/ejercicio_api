async function fetchData () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  // Si los datos son un array

  data.forEach(item => {
    document.getElementById('tabla-dato').innerHTML += `
                <tr>
                <th>${item.id}</th>
                <th>${item.name}</th>
                <th>${item.email}</th>
                
                <th>
                    <button onclick="editar(${item.id} class="btn btn-editar")">Editar</button>
                    <button onclick="eliminar(${item.id}) class="btn btn-eliminar">Eliminar</button>
                </th>
                </tr>
            `
  })
}

fetchData()
