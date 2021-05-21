import React from 'react'

function TechItem({tech, onDelete}) {
    return (
        <li>
            {tech}
            <button type="button" onClick={ onDelete }> Remover</button>
        </li>
    )
}

/**
 * Forma de definir valores default para as variaveis em uma function
 */
TechItem.defaultProps = {
    tech: 'Oculto'
}

export default TechItem