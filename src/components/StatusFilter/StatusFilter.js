import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import {useSelector, useDispatch} from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selector";
import { setStatusFilter } from "../../redux/action";

export const StatusFilter = () => {
    const filter = useSelector(getStatusFilter);
    const dispatch = useDispatch();

    const handleFilterChange = filter => dispatch(setStatusFilter(filter))

  return (
    <div className={css.wrapper}>
      <Button 
          selected={filter === statusFilters.all} 
          onClick={()=>handleFilterChange(statusFilters.all)}
      >All</Button>
      <Button 
          selected={filter === statusFilters.active}
          onClick={()=>handleFilterChange(statusFilters.active)}
      >Active</Button>
      <Button 
          selected={filter === statusFilters.completed}
          onClick={()=>handleFilterChange(statusFilters.completed)}
      >Completed</Button>
    </div>
  );
};
