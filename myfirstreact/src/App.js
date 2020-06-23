import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoad: false
    }
    console.log('constructor');
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => 
        response.json())
      .then(users => {
        this.setState({
          isLoad: true,
          items: users
        })
      })
  }

  reverseData = () => {
    this.setState({
isLoad:true,
items:this.state.items.reverse()

    })
  }
  render() {
    var {isLoad,items} = this.state;

    if(!isLoad) {
      return <div>Loading...</div>
    }

    else {
    return (
      <div className="App">
        <table>
        <tr>
    <th>Name</th>
    <th>Email</th>
    <th>City</th>
  </tr>
{items.map(item =>(

<tr key={item.id}>
<td>{item.name}</td> 
<td>{item.email}</td>
<td>{item.address.city}</td>
</tr>

))}

        </table>
    <button type='button' onClick = {this.reverseData}>Click</button>
      </div>
    );
  }
}
}
export default App;