        console.log('App.js is runing!');
        //JSX - JavaScirpt XML
        //

        var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
        var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

        function inWords (num) {
            if ((num = num.toString()).length > 9) return 'overflow';
            var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            if (!n) return; var str = '';
            str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
            str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
            str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
            str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
            str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])  : '';
            return str;
        }

        var template = (
            <div>
                <h1>Jasper Zhou</h1>
                <p>This is my first React App</p>
                    <ol>
                            <li>Item One</li>
                            <li>Item Two</li>
                    </ol>
            </div>
        );

        // Create a templateTwo var JSX expression
        //

        const app = {
            title: 'Indecision App',
            subtitle: 'Add Oil Jasper',
            options: []
        }
        // console.log(app.options.length);
        // console.log(app.options[0]['One']);
        // console.log(app.options[1].Two);


        const user = {
            name:'Jasper',
            age:17,
            location:'Melbourne'
        }

        function getLocation(location) {
            if(location){
                return <p>Location: {location}</p>;
            }else{

            }

        }

        const template2 = (
            <div>
                    <h1>{user.name? user.name: "Anonymous"}</h1>
                    {false}
                    <p>{user.age >= 18 && <pre>Age: {user.name}</pre> }</p>
                    {getLocation(user.location)}
            </div>
        );

        const onFormSubmit = (e) =>{
            e.preventDefault();
        //    start the whole page refresh
        //    get the value which the user type
            const op = e.target.elements.option.value;

            if(op){
                app.options.push(op);
                e.target.elements.option.value='';
                renderApp();
            }

        }

        const getOption = (options)=>{
            console.log(app.options);
            const opMessage = options.map( (option, index) => {

                return <li key={index}>Item &nbsp;{inWords(index+1)}:&nbsp;{option}</li>;
            });
                return opMessage;


        }


        const rmAll = ()=>{
            app.options=[];
            renderApp();

        }

        const onMakeDecision = ()=>{
            const randomNum = Math.floor(Math.random() * app.options.length);
            const option = app.options[randomNum]
            alert(option);
            renderApp();

        }

        const appRoot = document.getElementById('app');

        //create a new render function that renders the new JSX
        const renderApp = ()=>{
            const templateApp = (
                <div>
                    <h1>{app.title? app.title: "Anonymous"}</h1>
                    {app.subtitle && <p>{app.subtitle}</p>}
                    <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
                    <p>{app.options.length}</p>
                    <br></br>
                    <button disabled={app.options.length=== 0 } onClick={onMakeDecision}>What should I do?</button>
                    <button name='rm'onClick={ rmAll }>Remove All</button>

                    <ol>
                        {getOption(app.options)}
                    </ol>
                    <form onSubmit={ onFormSubmit}>
                        <input type='text'name='option'/>
                        <button>Add Option</button>
                    </form>
                    <p>

                    </p>

                </div>
            )
            ReactDOM.render(templateApp,appRoot);
        };

        renderApp();