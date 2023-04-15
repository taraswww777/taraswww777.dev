import React from 'react';
import {Center, Text, Title} from '@mantine/core';
import {FaIcon} from "../fa-icon";

export const HeaderComponent = () => {
  return (
    <Center style={{flexWrap: 'wrap'}}>
      <Title order={1}>Ковалёв Тарас Викторович (taraswww777)</Title>
      <Text>
        Увеличение&nbsp;<FaIcon iconName={'fa-solid fa-arrow-trend-up'} />&nbsp;прибыли&nbsp;и
        сокращение&nbsp;<FaIcon iconName={'fa-solid fa-arrow-trend-down'} />&nbsp;издержек
      </Text>
    </Center>
  );
}
