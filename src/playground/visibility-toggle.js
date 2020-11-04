class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility:false
        }

    }

    toggleVisibility(){
        this.setState((preState)=>{
            return{
                visibility:!preState.visibility
            }
        })

    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button name="hide detail" onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide Detail' : 'Show Detail'}
                </button>
                {this.state.visibility &&
                <div>
                    <p>Hey.These are some details you can see!</p>
                </div>
                }
            </div>
        )
    }


}

ReactDOM.render(<Toggle/>,document.getElementById('app'));




{/*let count = false;*/}

{/*const toggleVisibility = ()=> {*/}
    {/*count = !count;*/}

    {/*render();*/}

{/*}*/}

{/*const appRoot = document.getElementById('app');*/}

{/*const render = ()=>{*/}
    {/*const templateApp = (*/}
        {/*<div>*/}
            {/*<h1>Visibility Toggle</h1>*/}
            {/*<button name="hide detail" onClick={toggleVisibility}>*/}
                {/*{count  ? 'Hide Detail': 'Show Detail'}*/}
                {/*</button>*/}
            {/*{count &&*/}
            {/*<div>*/}
                {/*<p>Hey.These are some details you can see!</p>*/}
            {/*</div>*/}
                {/*}*/}



        {/*</div>*/}
    {/*)*/}
    {/*ReactDOM.render(templateApp,appRoot);*/}
{/*};*/}

{/*render();*/}