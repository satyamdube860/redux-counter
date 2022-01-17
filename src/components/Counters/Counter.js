import React from 'react';
import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';



const Counter =()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter);

const increaseHandler =()=>{
    dispatch({type:'increment'});
};
const decreseHandler =()=>{
    dispatch({type:'decrement'})
}
    return(
        <main className={classes.counter}>
            <h2>Redux counter</h2>
                <div className={classes.value}>{counter}</div> 
                 
            <div>
                <button onClick={increaseHandler}>Increment</button>
            <button onClick={decreseHandler}>Decrement</button>
            </div>
            <button>togele counter</button>
            
        </main>
    );
};

export default Counter;