import { useDispatch, useSelector } from "react-redux";
import { actions } from "./saga-action/actions";//13
export default function App() {


  const dispatch = useDispatch()//12
  // console.log(dispatch)

  const { facted } = useSelector(state => state.catFact)//20
  const { dogFact } = useSelector(state => state.dogPhoto)

  console.log(dogFact)

  return (
    <div className="App">
      <button
        onClick={() => dispatch({
          type: actions.GET_FACT
        })} >
        Get cat fact
      </button>

      <button
        onClick={() => dispatch({
          type: actions.GET_D0G_PHOTO
        })}>
        Get Dog Photo
      </button>
      <div>{facted}</div>
      <img
        src={dogFact}
        alt=""
        style={{ width: 250 }}
      />

    </div>
  );
}
