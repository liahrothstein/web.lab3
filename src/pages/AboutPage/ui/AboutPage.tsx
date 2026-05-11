import { Card, Nav } from "@entities/index";

import photo from "../../../shared/assets/images/photo.jpg";
import type { FormData } from "../../../shared/types/formData";

interface AboutPageProps {
  dataArr: FormData[];
}

export function AboutPage({ dataArr }: AboutPageProps) {
  return (
    <div className="about">
      <h1>Об авторе проекта</h1>
      <Nav />
      <section>
        <figure>
          <img src={photo} alt="Фото автора" />
          <figcaption>Front-end разработчик</figcaption>
        </figure>
      </section>
      <section>
        <h2>Личная информация</h2>
        <ul>
          <li>
            <strong>Ф.И.О.:</strong> Новиков Дмитрий Алексеевич
          </li>
          <li>
            <strong>Учебное заведение:</strong> ГГУ им. Франциска Скорины
          </li>
          <li>
            <strong>Группа:</strong> КФ-17
          </li>
          <li>
            <strong>Номер варианта:</strong> 14
          </li>
        </ul>
      </section>
      <section>
        <h2>Контактная информация</h2>
        <p>
          Для связи с автором по вопросам работы системы вы можете использовать
          следующие каналы:
        </p>
        <ul>
          <li>
            <strong>Электронная почта:</strong> liahrothstein@gmail.com
          </li>
          <li>
            <strong>Телефон:</strong> +375 (29) 622-44-83
          </li>
          <li>
            <strong>Telegram:</strong> @i_do_not_really_care_anymore_now
          </li>
        </ul>
      </section>
      <section>
        <h2>Дополнительно</h2>
        <p>
          Данный веб-сайт разработан в рамках изучения технологий создания
          фреймовых структур и форм ввода данных. В ходе работы были применены
          значения для варианта №14: сбор данных о Ф.И.О., годе рождения, росте,
          весе и группе крови пользователя.
        </p>
      </section>
      {dataArr.length !== 0 && (
        <>
          <h2>Список пациентов</h2>
          <div className="patientsCards">
            {dataArr.map((el) => (
              <Card data={el} key={el.fio} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
