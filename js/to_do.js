class Done extends React.Component {
    constructor(props) {
        super(props);
        this.passUpDoneItem = this.passUpDoneItem.bind(this);
        this.deleteThisItem = this.deleteThisItem.bind(this);
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

    deleteThisItem(e){
        this.props.deleteDoneItem(e.target.id);
    }

    render() {
        return (
            <div>
                <div className="list-title">Done List</div>
                <ul>
                    {this.state.doneItems.map((activity, index) =>
                        <div key={index} className="listItem done"><li id={index} onClick={this.passUpDoneItem}>
                            {activity}
                        </li><spnan><i className="fas fa-trash-alt" onClick={this.deleteThisItem}></i></spnan></div>)
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
        this.deleteThisItem = this.deleteThisItem.bind(this);
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
    }

    deleteThisItem(e){
        this.props.deleteToDoItem(e.target.id);
    }

    render() {
        return (
            <div>
                <div className="list-title">To Do List</div>
                <ul>
                    {this.state.toDoArray.map((activity, index) =>
                        <div key={index} className="listItem "><li id={index} onClick={this.passDownDoneItem}>
                            {activity}
                        </li><spnan><i className="fas fa-trash-alt" onClick={this.deleteThisItem} ></i></spnan></div>)
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
        this.deleteToDoItem = this.deleteToDoItem.bind(this);
        this.deleteDoneItem = this.deleteDoneItem.bind(this);
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
            doneItems: this.state.doneItems.flat()
        });
    }

    returnDoneItem(input) {
        var toDoItem = this.state.doneItems.splice(input, 1);
        this.state.toDoItems.push(toDoItem);
        this.setState({
            toDoItems: this.state.toDoItems.flat()
        });
    }

    deleteToDoItem(input){
        this.setState({
            toDoItems: this.state.toDoItems.splice(input, 1)
        })
    }

    deleteDoneItem(input){
        this.setState({
            doneItems: this.state.doneItems.splice(input, 1)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="input-wrapper">
                    <input
                        id="inputBox"
                        placeholder="add item to list..."
                        value={this.state.userInput}
                        onChange={this.handleUserInput}
                        className="textBox"
                    />
                    <button onClick={this.addToDoItem}><div className="shiaDoitImg"></div></button>
                </div>
                <ToDo passToDoItems={this.state.toDoItems} 
                updateDoneItems={this.addDoneItem} 
                deleteToDoItem={this.deleteToDoItem}
                />
                <Done passDoneItems={this.state.doneItems} 
                updateToDoItems={this.returnDoneItem} 
                deleteDoneItem={this.deleteDoneItem}
                />
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
            <div className="header">
                <h1>Just Do It! Productivity Manager</h1>
                <div className="shiaHeaderImg"></div>
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