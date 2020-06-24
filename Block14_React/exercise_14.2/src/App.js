import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: ''
    }
    this.bancoDeImagens = this.bancoDeImagens.bind(this);
  }

  bancoDeImagens() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then( (result) => result.json())
      .then((imagem) => this.setState({ imagem }))
  }


  componentDidMount() {
    this.bancoDeImagens();
  }

  render() {
    const { imagem } = this.state;
    if (imagem === '') return <h2>Carregando...</h2>
    return (
      <div>
        <h2>Cachorrinhos!</h2>
        <button onClick={this.bancoDeImagens()}>Quero ver outro cachorrinho!</button>
        <div>
        <img src={imagem.message} alt={'Cachorrinho'}/>
        </div>
      </div>
    );
  }
}

export default App;
