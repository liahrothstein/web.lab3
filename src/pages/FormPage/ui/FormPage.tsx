import { dataInit } from "@constants/dataInit";
import { Card, Nav } from "@entities/index";

import type { FormData } from "../../../shared/types/formData";

interface FormPageProps {
  data: FormData;
  setData: (data: FormData) => void;
  dataArr: FormData[];
  setDataArr: (data: FormData[]) => void;
}

export function FormPage({
  data,
  setData,
  dataArr,
  setDataArr,
}: FormPageProps) {
  return (
    <div>
      <h2>Форма ввода данных пациента</h2>
      <Nav />
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="fio">Ф.И.О.:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="fio"
                  name="fio"
                  value={data.fio}
                  onChange={(e) => {
                    setData({
                      fio: e.target.value,
                      birthYear: data.birthYear,
                      height: data.height,
                      weight: data.weight,
                      bloodType: data.bloodType,
                      rhFactor: data.rhFactor,
                    });
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="birthYear">Год рождения:</label>
              </td>
              <td>
                <input
                  type="data"
                  id="birthYear"
                  name="birthYear"
                  value={data.birthYear}
                  onChange={(e) => {
                    setData({
                      fio: data.fio,
                      birthYear: e.target.value,
                      height: data.height,
                      weight: data.weight,
                      bloodType: data.bloodType,
                      rhFactor: data.rhFactor,
                    });
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="height">Рост (см):</label>
              </td>
              <td>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={data.height}
                  onChange={(e) => {
                    setData({
                      fio: data.fio,
                      birthYear: data.birthYear,
                      height: e.target.value,
                      weight: data.weight,
                      bloodType: data.bloodType,
                      rhFactor: data.rhFactor,
                    });
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="weight">Вес (кг):</label>
              </td>
              <td>
                <input
                  type="number"
                  step="0.1"
                  id="weight"
                  name="weight"
                  value={data.weight}
                  onChange={(e) => {
                    setData({
                      fio: data.fio,
                      birthYear: data.birthYear,
                      height: data.height,
                      weight: e.target.value,
                      bloodType: data.bloodType,
                      rhFactor: data.rhFactor,
                    });
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="bloodType">Группа крови:</label>
              </td>
              <td>
                <select
                  id="bloodType"
                  name="bloodType"
                  value={data.bloodType}
                  onChange={(e) => {
                    setData({
                      fio: data.fio,
                      birthYear: data.birthYear,
                      height: data.height,
                      weight: data.weight,
                      bloodType: e.target.value,
                      rhFactor: data.rhFactor,
                    });
                  }}
                  required
                >
                  <option value="1">I (0)</option>
                  <option value="2">II (A)</option>
                  <option value="3">III (B)</option>
                  <option value="4">IV (AB)</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Резус-фактор:</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="rhFactor"
                    checked={data.rhFactor === "positive"}
                    value={data.bloodType}
                    onChange={() => {
                      setData({
                        fio: data.fio,
                        birthYear: data.birthYear,
                        height: data.height,
                        weight: data.weight,
                        bloodType: data.bloodType,
                        rhFactor: "positive",
                      });
                    }}
                  />{" "}
                  +
                </label>
                <label>
                  <input
                    type="radio"
                    name="rhFactor"
                    checked={data.rhFactor === "negative"}
                    value={data.bloodType}
                    onChange={() => {
                      setData({
                        fio: data.fio,
                        birthYear: data.birthYear,
                        height: data.height,
                        weight: data.weight,
                        bloodType: data.bloodType,
                        rhFactor: "negative",
                      });
                    }}
                  />{" "}
                  -
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button
            type="button"
            onClick={() => {
              setDataArr([...dataArr, data]);
            }}
            disabled={data.fio === ""}
          >
            Отправить
          </button>
          <button
            type="button"
            onClick={() => {
              setData(dataInit);
            }}
          >
            Очистить
          </button>
        </div>
      </form>
      <h2>Список пациентов</h2>
      <div className="patientsCards">
        {dataArr.map((el) => (
          <Card data={el} key={el.fio} />
        ))}
      </div>
    </div>
  );
}
