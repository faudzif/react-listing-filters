import Dropdown from "./../../Tags/Dropdown";
import Input from "./../../Tags/Input";

function Filters(props) {
  const { search, change, change2, secondDD, count, searchValue } = props;

  return (
    <>
      <Dropdown event={change}>
        <option value="">Select Category</option>
        {props.data.map((name, i) => {
          return (
            <option value={i} key={i}>
              {name.cateogryName}
            </option>
          );
        })}
      </Dropdown>

      {secondDD && (
        <Dropdown event={change2}>
          {props.data[count].subCategories.map((name, i) => {
            return (
              <option value={i} key={i}>
                {name.cateogryName}
              </option>
            );
          })}
        </Dropdown>
      )}

      <Input value={searchValue} event={search} />
    </>
  );
}

export default Filters;
