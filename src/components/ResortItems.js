import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import ResortItem from "./ResortItem";

const ResrotItems = (props) => {
  const { state } = useContext(Context);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
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
