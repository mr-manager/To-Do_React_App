class Done extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                Done list
            </div>
        );
    }
}

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            itemArray: []
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }
    handleUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    addItemToList() {
        this.state.itemArray.push(this.state.userInput);
        this.setState({
            userInput: ""
        })
    }
    render() {

        return (
            <div>
                <input
                    id="inputBox"
                    placeholder="add item to list..."
                    value={this.state.userInput}
                    onChange={this.handleUserInput}
                />
                <button onClick={this.addItemToList}> Add</button>
                <ul>
                    {this.state.itemArray.map((activity, index) => <li key={index}>{activity}</li>)}
                </ul>
            </div>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <ToDo />
                <Done />
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                Header-
                To Do: Make Header with Logo
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Header />
                <Body />
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