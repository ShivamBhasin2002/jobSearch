import './button.styles.css';

const Button = ({ msg, handleChange, active }) => {
	return (
		<a
			className={`button ${active ? 'active' : ''}`}
			onClick={handleChange}
			href='#'
		>
			{msg}
		</a>
	);
};

export default Button;
