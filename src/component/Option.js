import * as React from 'react';

const Option = (props)=>{
    return(
        <ol>
            Option: {props.optionText}
            <button
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}>
                Remove
            </button>
        </ol>
    )
}

export default Option;