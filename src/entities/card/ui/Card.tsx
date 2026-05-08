import type { FormData } from "../../../shared/types/formData";

interface DataProps {
  data: FormData;
}

export function Card({ data }: DataProps) {
  return (
    <div>
      <h3>Карточка пациента: {data.fio}</h3>
      <section>
        <h4>Основные сведения</h4>
        <ul>
          <li>
            <strong>Ф.И.О.:</strong> {data.fio || "Не указано"}
          </li>
          <li>
            <strong>Год рождения:</strong> {data.birthYear} г.
          </li>
        </ul>
      </section>
      <section>
        <h4>Физические показатели</h4>
        <ul>
          <li>
            <strong>Рост:</strong> {data.height} см
          </li>
          <li>
            <strong>Вес:</strong> {data.weight} кг
          </li>
        </ul>
      </section>
      <section>
        <h4>Медицинские данные</h4>
        <ul>
          <li>
            <strong>Группа крови:</strong> {data.bloodType}
          </li>
          <li>
            <strong>Резус-фактор:</strong>{" "}
            {data.rhFactor === "positive"
              ? "Положительный (+)"
              : "Отрицательный (-)"}
          </li>
        </ul>
      </section>
    </div>
  );
}
