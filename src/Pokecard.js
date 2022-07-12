import './Pokecard.css';

const pokeLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
	let img = `${pokeLink}${props.id}.png`;

	let { name, type, exp } = props;
	return (
		<div className="Pokecard">
			<h3 className="Pokecard-name">{name}</h3>
			<img src={img} alt={name} />
			<div className="Pokecard-features">
				<p>Type: {type}</p>
				<p>EXP: {exp}</p>
			</div>
		</div>
	);
};

export default Pokecard;
