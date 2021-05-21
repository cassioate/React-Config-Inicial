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

    render() {
       return (
        <>  
            <h1>{this.state.newTech}</h1>
            <ul>
                {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
            <input type="text" onChange={this.handleInputChange}></input>
        </>
        
       ) 
    }
}

export default TechList;