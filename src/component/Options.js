import * as React from 'react';
import Option from './Option';

const Options= (props)=>{
    return(
        <div>
            <button name='rmAll'
                    onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
            <br/>
            {props.options.length ===0 && <p>Please add an option to get start</p>}
            <p>There are {props.options.length} options</p>
            {
                // this.props.options.map((option,index)=> <p key={index}>{option}</p>)
                props.options.map((option,index)=>
                    <Option
                        key={index}
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />)
            }
        </div>
    )
};

export default Options;