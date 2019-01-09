class Store {
    constructor(state){
        this.listeners = [];
        // this.listener = () => {};  // NOOP function (can be called, but doesn't do anything)
        this.state = state;
    }

    // reducer is a function
    // reducer takes in state as an arg and returns a diff state
    // reduce our state from one state to another, and whatever comes back gets reassigned to state
    // control the way our state is updated with dispatch. dispatch a general action to our store.
    dispatch(reducer){
        this.state = reducer(this.state);

        // render(this.state); // eslint-disable-line
        // do some things when dispatch happens. listener = waiting around for something to happen
        this.listeners.forEach(
            (listener) => listener(this.state)
        );
        // What happens when we don't have any listeners? empty array. nothing. 
        // this.listener(this.state);
    }

    addListener(listener){

        this.listeners.push(listener);
        // this.listener = listener; //whatver we pass into this listener will always be called/dispatched

    }
}

export default Store;