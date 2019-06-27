class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

render();