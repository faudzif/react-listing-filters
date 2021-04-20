function Dropdown(props) {
  const { children, event, value } = props;

  return (
    <select value={value} onChange={event}>
      {children}
    </select>
  );
}

export default Dropdown;
