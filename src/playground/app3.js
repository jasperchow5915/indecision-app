class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            options:[]
        }
    }
    handleDeleteOptions(){
        this.setState(()=>{
        return{
            options:[]
        }
        });
    }

    handlePick(){

            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            alert(option);

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

        this.setState((preState) => {
                return {
                    options: preState.options.concat(option)
                }
            })

    }

    render(){
        const title =  'Indecision';
        const subtitle = 'Put your life in the hand of a computer';

        return(
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action
                hasOptions={this.state.options.length >0 }
                handlePick={this.handlePick}
            />
            <Options
                options ={this.state.options}
                handleDeleteOptions ={this.handleDeleteOptions}

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
            <h2>{props.subtitle}</h2>
        </div>
    )
}



// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//     )
//     }
//
// }

const Action =(props)=>{

    return (
        <div>
            <button disabled={!props.hasOptions}
                    onClick={props.handlePick}>
                What should I do?
            </button>
        </div>
    );

}

// class Action extends React.Component{
//
//     render(){
//         return (
//           <div>
//               <button disabled={!this.props.hasOptions}
//                       onClick={this.props.handlePick}>
//                   What should I do?
//               </button>
//           </div>
//         );
//     }
//
// }


const Options= (props)=>{
    return(
        <div>
            <button name='rmAll'
                    onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
            <br/>
            <p>There are {props.options.length} options</p>
            {
                // this.props.options.map((option,index)=> <p key={index}>{option}</p>)
                props.options.map((option,index)=> <Option key={index}
                                                                optionText={option}/>)
            }
        </div>
    )


}

// class Options extends  React.Component{
//
//     render( ){
//         return(
//             <div>
//                 <button name='rmAll'
//                         onClick={this.props.handleDeleteOptions}
//                 >
//                     Remove All
//                 </button>
//                 <br/>
//                 <p>There are {this.props.options.length} options</p>
//                 {
//                     // this.props.options.map((option,index)=> <p key={index}>{option}</p>)
//                     this.props.options.map((option,index)=> <Option key={index}
//                                                                     optionText={option}/>)
//                         }
//             </div>
//         )
//     }
// }


const Option = (props)=>{
    return(
        <ol>
            Option: {props.optionText}
        </ol>
    )
}

// class Option extends React.Component{
//
//     render(){
//
//         return(
//             <ol>
//                 Option: {this.props.optionText}
//             </ol>
//         )
//     }
//
// }

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

        this.setState(()=>{
            return {
                // error: error
                error
            }
        })

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

// const User = (props) =>{
//     return (
//         <div>
//             <p>Name:{props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
//
// }



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
