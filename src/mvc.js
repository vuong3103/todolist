// All in one
// eslint-disable-next-line
function main () {

  // Controller
  // Step 1
  dog.color = 'red'

  // Step 2
  if (dog.status === 'sit') {
    dog.run()
  }

  // View
  const html = `
  <table>
    <tr>
      <td>Name</td>
      <td>${dog.name}</td>
    </tr>

    <tr>
      <td>Color</td>
      <td>${dog.color}</td>
    </tr>

    <tr>
      <td>Status</td>
      <td>${dog.status}</td>
    </tr>
  </table>
  `

  return html
}

// SRP
// Model
const dog = {
  name: 'Micky',
  color: 'black',
  status: 'sit',
  race: '',

  run () {
    this.status = 'running'
  }
}
