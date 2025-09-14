function Button(props) {
  const { className, children, ...otherProps } = props;
  return (
    <button
      className={['btn', className].join(' ')}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
