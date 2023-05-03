import Image from 'next/image';
import {imageLoader} from 'src/utils/imageLoader';
import ImgSmall from '../../public/assets/my-photo-small.jpg'

export const AboutMeComponent = () => {
  const date = new Date();
  const birthday = new Date('01.03.1994');

  const timeDiff = Math.abs(date.getTime() - birthday.getTime());
  const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365))

  return (
    <div className="row">
      <picture className="col-md-4 col-sm-12">
        <Image
          src={ImgSmall}
          loading="lazy"
          className="img-fluid"
          width="348"
          height="521"
          alt="Это я"
          loader={imageLoader}
        />
      </picture>
      <div className="col-md-8 col-sm-12">
        <div className="mt-3">
          <h2>Всем, привет!</h2>
          <p>Меня зовут Тарас.</p>
          <p>
            Если вы попали на этот сайт осмысленно,
            то наверняка вас интересуют факты обо мне,
            я это знал и заранее их описал ниже.
          </p>
        </div>
        <p>Факты обо мне:</p>
        <ul>
          <li>Родился 1 марта 1994г ({age}лет)</li>
          <li>
            В 2015 получил степень бакалавра "Бизнес-информатики" в &nbsp;
            <a href="https://www.amursu.ru/" target="_blank">АмГУ</a>
          </li>
          <li>В 2013 начал совмещать работу программистом и учёбу в университете</li>
          <li>Начиная с сентября 2015 на постоянной основе начал работать программистом на коммерческой основе</li>
          <li>С 2019 начал заниматься менторством по програмированию</li>
          <li>В настоящее время работаю FE разработчиком</li>
          <li>Опыт работы и частичное портфолио расположено ниже.</li>
        </ul>
      </div>
    </div>
  );
};
