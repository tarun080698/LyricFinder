import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useTheme } from "../../theme/useTheme";
import { getFromLS } from "../../utils/storage";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";

export default function ThemeSelector(props) {

  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
    console.log(selectedTheme);
    setMode(selectedTheme);
    props.setter(selectedTheme);
  };

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  //   useEffect(() => {
  //     console.log(props.theme);
  //     props.theme && updateThemeCard(props.theme);
  //   }, [props.theme]);

  //   const updateThemeCard = (theme) => {
  //     const key = _.keys(theme)[0];
  //     const updated = { ...data, [key]: theme[key] };
  //     setData(updated);
  //   };

  return (
    <div>
      <Select
        onChange={(value) => {
          console.log(value);
          themeSwitcher(value)
        }}
      >
        {themes.length > 0 &&
          themes.map((theme) => (
            <Option value={data[theme]} key={data[theme].id}>
              {data[theme].name}
            </Option>
          ))}
      </Select>
    </div>
  );
}

// {
//   /* <option value="light" onClick={(value) => themeSwitcher(props.theme)}>
//           Light
//         </option>
//         <option value="seaWave" onClick={(theme) => themeSwitcher(props.theme)}>
//           Sea Wave
//         </option>
//         <option value="light">Dark</option>
//         <option value="seaWave">Three</option> */
// }
