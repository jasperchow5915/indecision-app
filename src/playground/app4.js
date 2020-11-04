class IndecisionApp extends React.Component {
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


const Header= (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

// IndecisionApp.defaultProps = {
//     options:[]
// }

Header.defaultProps = {
    title:"Indecision App",
}
const Action =(props)=> {

    return (
        <div>
            <button disabled={!props.hasOptions}
                    onClick={props.handlePick}>
                What should I do?
            </button>
        </div>
    );
}

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


}

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


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption (event){
        event.preventDefault();
        const newOpText = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(newOpText);
        this.setState(()=>({ error}));

        if(!error){
            event.target.elements.option.value= '';
        }


    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button >Add Option</button>
                </form>
            </div>

        )
    }
}
// ReactDOM.render(<IndecisionApp options={['Dare Devil','Spider Man']}/>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
