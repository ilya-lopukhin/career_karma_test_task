import React from 'react';
import { Image } from 'components';
import { Flex, Text } from 'styled';

const Banner = () => (
  <Flex spacing={40} width="100%" padding="0 0 40px 0" justify="center">
    <Image path="amazonCard.png" />
    <Flex column width="662px">
      <Text.Light line="30px">
        Review your bootcamp
      </Text.Light>
      <Text.Bold size="32pt">
        Win $500 to Amazon
      </Text.Bold>
      <Text.Light line="24px">
        Reviewing your coding bootcamp experience will help future students make an educated decision, plus you'll be entered to win a $500 Amazon Giftcard! Leave your verified review by June 30th, 2019!
      </Text.Light>
    </Flex>
  </Flex>
);

export default Banner;
