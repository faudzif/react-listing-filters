function ServiceListing(props) {
  const numbers = props.data;
  const listItems = numbers.map((data, i) => (
    <li key={i}>
      {data.cateogryTitle}
      <div>farhan</div>
    </li>
  ));
  console.log(props.data);
  return <ul>{listItems}</ul>;
}

export default ServiceListing;
