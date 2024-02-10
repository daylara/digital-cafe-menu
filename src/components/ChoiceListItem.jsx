
import './ChoiceListItem.css';
import kahvalti from "../assets/kahvalti.jpg"

const ChoiceListItem = ({ choice }) => {
  const { name, ingredients, price } = choice;

  return (
    <div className='choice-list-item'>
      <img src={kahvalti} className='photo' />
      <div className='item-name'>
        <div>{name}</div>
        <div className='item-description'>
          <div>{ingredients && ` - ${ingredients.join(', ')}`}</div>
          <div className="price">{price} TL</div>
        </div>
      </div>
    </div>
  );
};
export default ChoiceListItem;