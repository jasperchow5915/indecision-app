        console.log('App.js is runing!');
        //JSX - JavaScirpt XML
        //
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
            options: ['One', 'Two']
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

        // function getOption( ){
        //
        //
        //         return (function (op) {
        //
        //             for (var i = 0; i < op.length; i++) {
        //                 return <p>Option: {op[i]}</p>
        //             }
        //         })( )
        //
        //
        // }

        const template2 = (
            <div>
                    <h1>{user.name? user.name: "Anonymous"}</h1>
                    {false}
                    <p>{user.age >= 18 && <pre>Age: {user.name}</pre> }</p>
                    {getLocation(user.location)}
            </div>
        );

        const templateApp = (
            <div>
                    <h1>{app.title? app.title: "Anonymous"}</h1>
                    {app.subtitle && <p>app.subtitle</p>}
                    <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>

                    <ol>
                        <li>Item One</li>
                        <li>Item One</li>
                    </ol>
            </div>
        );


        const appRoot = document.getElementById('app');

        // ReactDOM.render(template, appRoot );
        ReactDOM.render(templateApp,appRoot)