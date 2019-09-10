
//aprendendo a desenvolver em react 


// mexendo em propriedades e estados

import React from 'react';


export default class App extends React.Component{
  state = {
data:[
    {id: 1, nome: "joao"},
{id: 2, nome: "lucas"},
{id: 3, nome: "dandara"}
]




  }
 
 
  render(){




  return (
    <div>
      <table>
        <tbody>
{this.state.data.map((person,i)=> <TableRow  key = {i}
data={person}/>)}

        </tbody>
      </table>

    </div>
  );
 } 
}


class TableRow extends React.Component{
render(){

  
  return(
<div>
<tr>
<td>{this.props.data.id}</td>
<td>{this.props.data.nome}</td>


</tr>


</div>






  );
}  
}
 
