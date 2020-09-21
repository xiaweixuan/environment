import React from 'react';

class App extends React.Component {
    render() {
        return <div>
            <h1>hello , this is the beginning</h1>
            <ul>
                {
                    ['react', 'angular', 'vue'].map(item => <li>{`It’s ${item}`}</li> )
                }
            </ul>
        </div>
    }
}

export default App;