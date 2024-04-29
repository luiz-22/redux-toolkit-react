import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions/apiActions";

function Api() {
  const dispatch = useDispatch();
  const api = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]); 

  return (
    <div>
      <h2>Api</h2>
      <div className="flex flex-wrap">
        {api &&
          api.characters?.map((el, i) => {
            return (
              <div key={i}>
                <img src={el.image} alt={el.name} />
                <p>{el.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Api;
