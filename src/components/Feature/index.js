import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza do dia</h1>
      <p>Molho de trufas Alfredo coberto em pó de ouro 24 quilates</p>
      <FeatureButton>Peça agora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
