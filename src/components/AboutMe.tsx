import Image from 'next/image';
import React from 'react';

export const AboutMe = () => {
  const date = new Date();
  const birthday = new Date('01.03.1994');

  const timeDiff = Math.abs(date.getTime() - birthday.getTime());
  const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365))

  return (
    <div className="
    flex w-full flex-wrap
    lg:flex-nowrap">
      <picture className="w-full text-center">
        <Image
          src="/assets/my-photo-small.jpg"
          property={'blur'}
          loading="lazy"
          className="img-fluid mb-4 mx-auto lg:m-auto lg:mb-0"
          width="348"
          height="521"
          alt="Это я"
        />
      </picture>
      <div className="grow-1 pl-2">
        <div>
          <h1 className="text-center text-2xl">Обо мне</h1>
          <h2>Всем, привет!</h2>
          <p>Меня зовут Тарас.</p>
          <p>
            Если вы попали на этот сайт осмысленно,
            то наверняка вас интересуют факты обо мне,
            я это знал и заранее их описал ниже.
          </p>
        </div>
        <p className="mt-3 mb-1">Факты обо мне:</p>
        <ul className="list-disc pl-4">
          <li>Родился 1 марта 1994г ({age}лет)</li>
          <li>
            В 2015 получил степень бакалавра "Бизнес-информатики" в &nbsp;
            <a href="https://www.amursu.ru/" target="_blank">АмГУ</a>
          </li>
          <li>В 2013 начал совмещать работу программистом и учёбу в университете</li>
          <li>Начиная с сентября 2015 на постоянной основе работаю программистом на коммерческой основе</li>
          <li>С 2019 занимаюсь менторством по программированию</li>
          <li>В настоящее время работаю FE разработчиком и ментором</li>
          <li>Специализируюсь на сложных задачах с неизвестным решением</li>
          <li>Опыт работы и частичное портфолио расположены ниже.</li>
        </ul>
      </div>
    </div>
  );
};
