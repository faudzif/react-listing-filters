import Dropdown from "./../../Tags/Dropdown";

function Filters(props) {
  return (
    <>
      {console.log(props.data)}
      <Dropdown>
        {props.data.map((name, i) => {
          return <option key={i}>{name.cateogryName}</option>;
        })}
      </Dropdown>
      <Dropdown>
        {props.data[0].subCategories.map((name, i) => {
          return <option key={i}>{name.cateogryName}</option>;
        })}
      </Dropdown>
      <Dropdown>
        {props.data.map((name, i) => {
          return <option key={i}>{name.cateogryName}</option>;
        })}
      </Dropdown>
    </>
    // <select>
    //   {Data.map((name, i) => {
    //     return <option key={i}>{name.cateogryName}</option>;
    //   })}
    // </select>
  );
}

export default Filters;
