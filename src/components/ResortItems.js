import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import ResortItem from "./ResortItem";
import useSort from "../hooks/useSort";

const ResrotItems = (props) => {
  const { state } = useContext(Context);
  const {isUp:titleIsUp, upHandler: titleUpHandler, downHandler: titleDownHandler} = useSort()
  const {isUp:priceIsUp, upHandler: priceUpHandler, downHandler: priceDownHandler} = useSort()
  return (
    <table>
      <thead>
        <tr>
          <th data-column="title">
            Title
            {titleIsUp ?
            <i onClick={titleUpHandler} className="bi bi-caret-up-fill"></i>
            :
            <i onClick={titleDownHandler} className="bi bi-caret-down-fill"></i>
            } 
          </th>
          <th>Description</th>
          <th data-column="price">
            Price
            {priceIsUp ?
            <i onClick={priceUpHandler} className="bi bi-caret-up-fill"></i>
            :
            <i onClick={priceDownHandler} className="bi bi-caret-down-fill"></i>
            }
          </th>
          <th>Image</th>
          <th>Operate</th>
        </tr>
      </thead>

      <tbody>
        {state.showResorts &&
          state.showResorts.map((resort) => (
            <tr key={resort.id}>
              <ResortItem resort={resort} />
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ResrotItems;
