import React from 'react';
import { useParams } from 'react-router-dom'; // useParams kancasını içe aktar
import ChoiceList from './ChoiceList'; // ChoiceList bileşenini içe aktar

const PageWithChoiceList = ({ sections }) => {
  const { category } = useParams();

  return (
    <div>
      <ChoiceList category={category} sections={sections} />
    </div>
  );
};

export default PageWithChoiceList;
