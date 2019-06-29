class Done extends React.Component {
    constructor(props) {
        super(props);
        this.passUpDoneItem = this.passUpDoneItem.bind(this);
        this.state = {
            doneItems: []
        }
    }

    componentWillReceiveProps() {
        this.setState({
            doneItems: this.props.passDoneItems
        });
    }

    passUpDoneItem(e) {
        this.props.updateToDoItems(e.target.id);
        console.log(e.target.id);
    }

    render() {
        return (
            <div>
                <div>Done List</div>
                <ul>
                    {this.state.doneItems.map((activity, index) =>
                        <li key={index} id={index} onClick={this.passUpDoneItem}>
                            {activity}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.passDownDoneItem = this.passDownDoneItem.bind(this);
        this.state = {
            toDoArray: []
        }
    }

    componentWillReceiveProps() {
        this.setState({
            toDoArray: this.props.passToDoItems
        })
    }

    passDownDoneItem(e) {
        this.props.updateDoneItems(e.target.id);
        console.log(e.target.id);
    }

    render() {
        return (
            <div>
                <div>To Do List</div>
                <ul>
                    {this.state.toDoArray.map((activity, index) =>
                        <li key={index} id={index} onClick={this.passDownDoneItem}>
                            {activity}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.addToDoItem = this.addToDoItem.bind(this);
        this.addDoneItem = this.addDoneItem.bind(this);
        this.returnDoneItem = this.returnDoneItem.bind(this);
        this.state = {
            userInput: "",
            toDoItems: [],
            doneItems: []
        }
    }

    handleUserInput(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    addToDoItem() {
        this.state.toDoItems.push(this.state.userInput);
        this.setState({
            userInput: ""
        });
    }

    addDoneItem(input) {
        var doneItem = this.state.toDoItems.splice(input, 1);
        this.state.doneItems.push(doneItem);
        this.setState({
            userInput: ""
        });
    }

    returnDoneItem(input) {
        var toDoItem = this.state.doneItems.splice(input, 1);
        this.state.toDoItems.push(toDoItem);
        this.setState({
            userInput: ""
        });
    }

    render() {
        return (
            <div className="container">
                <input
                    id="inputBox"
                    placeholder="add item to list..."
                    value={this.state.userInput}
                    onChange={this.handleUserInput}
                />
                <button onClick={this.addToDoItem}> Add</button>
                <ToDo passToDoItems={this.state.toDoItems} updateDoneItems={this.addDoneItem} />
                <Done passDoneItems={this.state.doneItems} updateToDoItems={this.returnDoneItem} />
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