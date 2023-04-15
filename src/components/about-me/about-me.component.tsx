import Image from 'next/image';
import {imageLoader} from 'src/utils/imageLoader';
import ImgSmall from '../../public/assets/my-photo-small.jpg'
import {Grid, List, Title, Text} from '@mantine/core';
import React from 'react';

export const AboutMeComponent = () => {
  const date = new Date();
  const birthday = new Date('01.03.1994');

  const timeDiff = Math.abs(date.getTime() - birthday.getTime());
  const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365))

  return (
    <Grid>
      <Grid.Col xs={12} md={4}>
        <Image
          src={ImgSmall}
          className="img-fluid"
          style={{maxWidth: '100%', height: 'auto'}}
          alt="Это я"
          loader={imageLoader}
        />
      </Grid.Col>
      <Grid.Col xs={12} md={8}>
        <Title order={2}>Всем, привет!</Title>
        <Text my={'1rem'}>Меня зовут Тарас.</Text>
        <Text>
          Если вы попали на этот сайт осмысленно,
          то наверняка вас интересуют факты обо мне,
          я это знал и заранее их описал ниже.
        </Text>
        <Text my={'1rem'}>Факты обо мне:</Text>
        <List listStyleType="disc">
          <List.Item>Родился 1 марта 1994г ({age}лет)</List.Item>
          <List.Item>
            В 2015 получил степень бакалавра "Бизнес-информатики"
            в&nbsp;<a href="https://www.amursu.ru/" target="_blank">АмГУ</a>
          </List.Item>
          <List.Item>В 2013 начал совмещать работу программистом и учёбу в университете</List.Item>
          <List.Item>Начиная с сентября 2015 на постоянной основе начал работать программистом на коммерческой основе</List.Item>
          <List.Item>С 2019 начал заниматься менторством по програмированию</List.Item>
          <List.Item>В настоящее время работаю FE разработчиком</List.Item>
          <List.Item>Опыт работы и частичное портфолио расположено ниже.</List.Item>
        </List>
      </Grid.Col>
    </Grid>
  );
};
