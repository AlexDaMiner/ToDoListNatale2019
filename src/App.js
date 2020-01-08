import React, { Component } from 'react';

class App extends Component {
  constructor(Props){
    super(Props);

    this.state={
      newItem:"",
      list:[]
    }

    //localStorage.getItem('lista')
  }

  //all'inserimento di ogni carattere nell'area di testo aggiorno lo stato dell'input
  updateInput(key, value){
    //aggiorno lo stato di react
    this.setState({
      [key]: value
    })
  }

  //aggiungo un oggetto alla lista dei ToDo
  addItem(){
    //creo un oggetto con id unico
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copio la lista di oggetti corrente
    let list = [];
    if (this.state.list !== null){
      list = [...this.state.list];
    }

    //aggiungo un nuovo oggetto alla lista
    list.push(newItem);

    //aggiorno la lista nello stato e resetto l'input newItem
    this.setState({
      list,
      newItem:""
    });

    //localStorage.setItem('lista', this.state.list);
  }

  //elimino un oggetto dalla lista dei ToDo
  deleteItem(id){
    //copio la lista dallo stato
    const list = [...this.state.list];

    //trovo l'oggetto che devo eliminare
    const updatedList = list.filter(item => item.id !== id);

    //aggiorno lo stato con la lista aggiornata
    this.setState({list : updatedList});

    //localStorage.setItem('lista', this.state.list);
  }

  render() {
    let lista = (<ul></ul>);
    if (this.state.list !== null){
      lista =(<ul>
        {this.state.list.map(item => {                                          //per ogni oggetto nella lista creo uno spazio in cui visualizzarlo insieme ad un pulsante per eliminarlo
          return(
            <li key={item.id}>
              {item.value}
              <button
                onClick={() => this.deleteItem(item.id)}
              >
              X
              </button>
            </li>
          )
        })}
      </ul>);
    }

    return (
      <div className="App">
        <div>
          Add an Item...
          <br/>
          <input                                                                //campo di testo in cui inserire il nome del ToDo
            type="text"
            placeholer="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}         //all'aggiunta di ogni carattere aggiorno lo stato dell'input di react
          />
          <button
            onClick={() => this.addItem()}                                      //pulsante per l'aggiunta dell'oggetto scritto
          >
            Add
          </button>
          <br/>
          {lista}
        </div>
      </div>
    );
  }
  
}

export default App;
