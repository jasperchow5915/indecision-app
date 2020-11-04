class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //define every state we would like to define
        this.state = {
            count: 0,
            // name: 'Julie'
        };
    }

    componentDidUpdate(prevPros,prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count',json);
        }
    }

    componentDidMount(){
        try{
            const stringCount = localStorage.getItem('count');
            const count =parseInt(stringCount,10);

            if(!isNaN(count)){
                this.setState(()=>({count}))
            }
        }catch(e){
            console.log(e);
        }
    }


    handleAddOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count -1
            }
        })

    }

    handleReset(){
        this.setState(()=>{
          return{
              count:0
          }
        })

    }

    render(){
        return(
        <div>

            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
        );
    }
}




// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter count={-10}/>,document.getElementById('app'));




        // console.log('App.js is runing!');
        // //JSX - JavaScirpt XML
        // //
        //
        // let count = 0;
        // const addOne = ( )=>{
        //
        //     count++;
        //     console.log('addOne',count);
        //     renderCounterApp();
        // }
        //
        // const minusOne = ()=>{
        //     console.log('minus one!');
        //     count--;
        //     renderCounterApp();
        // };
        //
        // const reset =()=>{
        //     console.log('Reset');
        //     count=0;
        //     renderCounterApp();
        // }
        //
        //
        // const appRoot = document.getElementById('app');
        //
        // const renderCounterApp = ()=>{
        //     const template2 = (
        //         <div>
        //             <h1>Count:{ count }</h1>
        //             {/*<button id={ someId } className="button">+1</button>*/}
        //             <button onClick={ addOne}>+1</button>
        //             <br></br>
        //             <br></br>
        //             <button onClick={minusOne}>-1</button>
        //             <br></br>
        //             <br></br>
        //             <button onClick={reset}>Reset</button>
        //         </div>
        //
        //     );
        //     ReactDOM.render(template2,appRoot);
        // }
        //
        // renderCounterApp();