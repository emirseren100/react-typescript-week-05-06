type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return <button className="primary-button">{label}</button>;
}

export default Button;