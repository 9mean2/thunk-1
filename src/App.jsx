import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counterSlice";

function App() {
  const globalNumber = useSelector((state) => state.counter.number);
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(+number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(-number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input
        type="number"
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>더하기</button>
    </div>
  );
}

export default App;
