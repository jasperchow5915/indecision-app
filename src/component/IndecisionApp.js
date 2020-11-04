import  React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            options:[]
        }
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options =JSON.parse(json);

            if(options) {
                this.setState(() => ({options}))
            }

        }catch (e){
            //    DO nothing at all

        }
    }

    componentDidUpdate (prevPros, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount(){
        console.log('Component will unmount!')
    }

    handleDeleteOptions(){
        this.setState(()=>({ options:[]}))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove !== option),
        }))
    }

    handleAddOption(option){
        // console.log(option);
        //add conditional logic
        //if it is empty string
        if(!option){
            return 'Enter valid value to add item'
            //    if there is any duplication
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exsists';
        }

        this.setState((preState) => ({options: preState.options.concat(option)}));
    }

    render(){
        const title =  'Indecision';
        const subtitle = 'Put your life in the hand of a computer';

        return(
            <div>
                <Header   subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length >0 }
                    handlePick={this.handlePick}
                />
                <Options
                    options ={this.state.options}
                    handleDeleteOptions ={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}

                />
                <AddOption
                    options ={this.state.options}
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}


// IndecisionApp.defaultProps = {
//     options:[]
// }

