import React, { Component } from 'react'

class TechList extends Component {

    state = {
        newTech: '',
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native'
        ]
    }

    handleInputChange = e => {
        this.setState({ newTech: e.target.value })
    }

    handleSubmit = e => {
        //preventDefault evita que a tela reinicie após o submit do formulario
        e.preventDefault();
        // o ... serve para copiar tudo que ja tem dentro do STATE.TECHS
        // Estou adicionando no array tudo que ja tinha no array anteriormente + o que tinha no newTech
        this.setState(
            { 
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
            }
        )
    }

    render() {
       return (
        <>  
            <h1>{this.state.newTech}</h1>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
                    </ul>
                    <input 
                    type="text" 
                    onChange={this.handleInputChange}
                    value={this.state.newTech}            
                    ></input>
                    <button type="submit">Enviar</button>
                </form>
        </>
        
       ) 
    }
}

export default TechList;