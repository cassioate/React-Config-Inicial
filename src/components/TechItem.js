import React from 'react'
import PropTypes from 'prop-types'

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

/**
 * Forma de definir TIPOS e Obrigatoriedade de valores em uma function
 */
TechItem.propTypes = {
    tech: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default TechItem