import React, { useState, useEffect } from 'react';
import './ChoiceList.css';
import ChoiceListItem from './ChoiceListItem';
import tost from "../assets/tost.jpg"

const ChoiceList = ({ sections, category }) => {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    if (category) {
      const selectedSection = sections[category];
      if (selectedSection) {
        setSets(selectedSection.choices);
      }
    }
  }, [category, sections]);
  const getImageUrl = (category) => {
    const selectedSection = sections[category];
    console.log(sections[category]);
    return selectedSection ? selectedSection.imageUrl : '';
  };

  return (
    <div className="choice-list">
       <img className='choice-image' src={tost} />
      <h2>{category}</h2>
      {sets.length > 0 ? (
        <div>
          {sets.map((set, index) => (
            <ChoiceListItem key={index} choice={set} />
          ))}
        </div>
      ) : (
        <div>No sets found.</div>
      )}
    </div>
  );
};

export default ChoiceList;
