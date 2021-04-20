function ServiceListing(props) {
  const data = props.data;
  const Services = data.map((mainCategories, i) => (
    <div key={i}>
      <h1>{mainCategories.cateogryName}</h1>
      {mainCategories.subCategories.map((subCategory, a) => (
        <div key={a}>
          <h3>{subCategory.cateogryName}</h3>
          <ul>
            {subCategory.services.map((service, s) => (
              <li key={s}>{service.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ));
  return <div>{Services}</div>;
}

export default ServiceListing;
