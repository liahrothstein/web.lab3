import { Card, Nav } from "@entities/index";

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
          <img src="my-photo.jpg" alt="Фото автора" width="200" />
          <figcaption>Студент-разработчик</figcaption>
        </figure>
      </section>
      <section>
        <h2>Личная информация</h2>
        <ul>
          <li>
            <strong>Ф.И.О.:</strong> Иванов Иван Иванович
          </li>
          <li>
            <strong>Учебное заведение:</strong> Государственный технический
            университет
          </li>
          <li>
            <strong>Группа:</strong> ИТ-24
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
            <strong>Электронная почта:</strong> ivan.ivanov@example.com
          </li>
          <li>
            <strong>Телефон:</strong> +7 (999) 000-00-00
          </li>
          <li>
            <strong>Telegram:</strong> @student_dev
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
