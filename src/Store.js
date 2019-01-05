class Store {
    constructor(state){
        this.listener = () => {};  // NOOP function (can be called, but doesn't do anything)
        this.state = state;
    }

    // reduce our state from one state to another, and whatever comes back gets reassigned to state
    dispatch(reducer){
        this.state = reducer(this.state);

        // render(this.state); // eslint-disable-line
        this.listener(this.state);
    }

    addListener(listener){
        this.listener = listener; //whatver we pass into this listener will always be called/dispatched

    }
}

export default Store;