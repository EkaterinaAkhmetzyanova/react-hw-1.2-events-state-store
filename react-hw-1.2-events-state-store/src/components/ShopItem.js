import PropTypes from 'prop-types';

export default function ShopItem({item}) {
    const { img, name, color, price } = item;
    return (
        <div className='shopItem'>
            <div className='shopItem-img'>
                <img src={img} alt='sneaker' class='img'></img>
            </div>
            <div className='shopItem-name'>{name}</div>
            <div className='shopItem-color'>{color}</div>
            <div className='shopItem-price'>${price}</div>
            <button className='shopItem-btn'>Add to card</button>
        </div>
    )
}

ShopItem.propTypes = {
    item: PropTypes.object.isRequired,
  }