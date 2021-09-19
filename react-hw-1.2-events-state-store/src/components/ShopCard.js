import PropTypes from 'prop-types';

export default function ShopCard({card}) {
    const { img, name, color, price } = card;
    const image = { backgroundImage: 'url('+ img +')' };
    return (
        <div className='shopCard' style={image}>
            <div className='shopCard-name'>{name}</div>
            <div className='shopCard-color'>{color}</div>
            <div className='shopCard-box'>
                <div className='shopCard-price'>${price}</div>
                <button className='shopCard-btn'>Add to card</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    card: PropTypes.object.isRequired,
  }