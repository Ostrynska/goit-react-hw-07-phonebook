import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setStatusFilter } from '../../redux/filtersSlice';
import { getStatusFilter } from '../../redux/selectors';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getStatusFilter);

  const onChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <FilterWrap>
      <FilterLabel>
        Find contacts by name
        <FilterInput value={filters} type="text" onChange={onChange} />
      </FilterLabel>
    </FilterWrap>
  );
};

export default Filter;
