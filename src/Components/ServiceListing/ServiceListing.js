function ServiceListing(props) {
  const { data, searchValue } = props;
  const MainServices = () => {
    if (searchValue === "") {
      return data.map((mainCategories, i) => (
        <div className="category-group" key={i}>
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
    } else {
      console.log(data);
      const NewData = data.filter((value) => value === "test");

      return NewData;
    }
  };

  return (
    <div>
      <MainServices />
      {/* {Services} */}
    </div>
  );
}

export default ServiceListing;
