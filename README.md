#1. Component Life Cycle Phases
Every React Component goes through three phases throughout its lifetime:

Mounting Phase
Updating Phase
Unmounting phase
##2. Mounting Phase
In this phase, the instance of a component is created and inserted into the DOM.

###2.1 Methods
We mainly use the three methods. The three methods are called in the given order:

constructor()
render()
componentDidMount()
###2.1.1 constructor()
The constructor() method is used to set up the initial state and class variables.

Syntax:

JSX
We must call the super(props) method before any other statement. Calling super(props) makes sure that constructor() of the React.Component gets called and initializes the instance.

Initialising State through props

JSX
####2.1.2 render()
The render() method is used to return the JSX that is displayed in the UI.

#####2.1.3 componentDidMount()
The componentDidMount() method is used to run statements that require that the component is already placed in the DOM.

Example: set timers, initiate API calls, etc.

#######3. Updating Phase
In this phase, the component is updated whenever there is a change in the component's state.

########3.1 Methods
3.1.1 render()
The render() method is called whenever there is a change in the component's state.

########4. Unmounting Phase
In this phase, the component instance is removed from the DOM.

##########4.1 Methods
4.1.1 componentWillUnmount()
The componentWillUnmount() method is used to cleanup activities performed.

Example: clearing timers, cancelling API calls, etc.
