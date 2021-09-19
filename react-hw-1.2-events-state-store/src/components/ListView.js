import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

export default function ListView({items}) {
    return (
        <div className='listView'>
            {items.map((item) => {
                return (
                    <ShopItem item={item} />
                )
            })}
        </div>
    )
}

ListView.propTypes = {
    items: PropTypes.array.isRequired,
}