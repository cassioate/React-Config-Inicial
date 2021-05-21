import React, { Component } from 'react'
import TechItem from './TechItem'
class TechList extends Component {

/**
 * Forma de definir valores default para as variaveis em uma Classe
 */
    // static defaultProps = {
    //     tech: "Outros"
    // }

    // static propTypes = {
    //     tech: PropTypes.string.isRequired,
    //     onDelete: PropTypes.func.isRequired
    // }


    state = {
        newTech: '',
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native'
        ]
    }

    // Executado assim que o componente aparece em tela
    componentDidMount() {
        const techs = localStorage.getItem('techs')

        if (techs) {
            this.setState({techs: JSON.parse(techs)})
        }
    }

    // Executado sempre que houver alterações nas propos ou estado
    componentDidUpdate(prevProps, prevState) {
        //this.props, this.state
        if (prevState !== this.state.techs){
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }

    // Executado quando o componente deixa de existir
    componentWillUnmount() {

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

    handleRemove = tech => {
        this.setState(
            { 
                techs: this.state.techs.filter(t => t !== tech) 
            }
        )
    }



    render() {
       return (
        <>  
            <h1>{this.state.newTech}</h1>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.state.techs.map( tech => 
                        <TechItem 
                        key={tech} 
                        tech={tech} 
                        onDelete={() => this.handleRemove(tech)}
                        >
                        </TechItem>
                        )}
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