import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import {counterAction} from '../store/counter-slice'

const Counter = () => {
  //Set up the Dispatch
  const dispatch = useDispatch()

  // This couter, showCounter will be managed by redux
  const counter = useSelector(state => state.counter.counter)
  const show_counter = useSelector(state => state.counter.showCounter)


  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  const incrementHandler=()=>{
    dispatch(counterAction.increment())
  }    
  const decrementHandler=()=>{
    dispatch(counterAction.decrement())
  }  

  const increaseHandler=()=>{
    dispatch(counterAction.increase(10))
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show_counter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
