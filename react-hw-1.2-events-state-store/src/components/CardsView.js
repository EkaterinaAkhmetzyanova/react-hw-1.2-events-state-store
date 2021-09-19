import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

export default function CardsView({cards}) {
    return (
        <div className='cardsView'>
            {cards.map((card) => {
                return (
                    <ShopCard card={card} />
                )
            })}
        </div>
    )
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired,
}