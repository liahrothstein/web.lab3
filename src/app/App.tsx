import { dataInit } from "@constants/dataInit";
import { AboutPage, FormPage, MainPage } from "@pages/index";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import type { FormData } from "../shared/types/formData";

function App() {
  const [data, setData] = useState<FormData>(dataInit);
  const [dataArr, setDataArr] = useState<FormData[]>([]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/web.lab3/" />} />
      <Route path="/web.lab3/" element={<MainPage />} />
      <Route path="/web.lab3/about" element={<AboutPage />} />
      <Route
        path="/web.lab3/form"
        element={
          <FormPage
            data={data}
            setData={setData}
            dataArr={dataArr}
            setDataArr={setDataArr}
          />
        }
      />
    </Routes>
  );
}

export default App;
