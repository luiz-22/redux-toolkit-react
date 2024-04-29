import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/reducers/walletSlice";

function Wallet() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.wallet.counter);

  return (
    <div>
      <h2>Wallet</h2>
      <div>
        <div>
          <button
            onClick={() => {
              dispatch(deposit());
            }}
          >
            deposit: $ 10
          </button>
          <button
            onClick={() => {
              dispatch(withdraw());
            }}
          >
            withdraw: $ 10
          </button>
        </div>
        <br />
        <div>
          <span className="font-bold">$ {balance}</span>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
