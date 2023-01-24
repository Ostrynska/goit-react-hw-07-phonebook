import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from '../../redux/contacts/slice';
import { getFilter } from '../../redux/contacts/selectors';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterWrap>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          value={filter}
          type="text"
          name="filter"
          onChange={e => dispatch(setFilter(e.target.value))}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FilterLabel>
    </FilterWrap>
  );
};

export default Filter;
