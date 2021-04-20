function Input(props) {
  const { event, value } = props;
  return <input value={value} onChange={event} />;
}

export default Input;
