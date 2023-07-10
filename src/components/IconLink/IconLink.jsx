import { useState } from 'react';
import style from './IconLink.module.scss';

function IconLink({ url, img, type = '' }) {
	const [active, setActive] = useState(false);

	const handleMouseOver = () => {
		setActive(true);
	};

	const handleMouseOut = () => {
		setActive(false);
	};

	if (type) {
		return (
			<a
				style={{ cursor: 'pointer' }}
				onClick={() => navigator.clipboard.writeText('nazar.korchevskyi1@gmail.com')}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
			>
				<img src={active ? `img/${img}_w.svg` : `img/${img}.svg`} alt={img} className={style.icon} />
			</a>
		);
	}
	return (
		<a href={url} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} target='blank'>
			<img src={active ? `img/${img}_w.svg` : `img/${img}.svg`} alt={img} className={style.icon} />
		</a>
	);
}

export default IconLink;
