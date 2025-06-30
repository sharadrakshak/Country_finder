// import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { Usetheme } from "../contexts/Usetheme";
// import { ThemeContext } from "../contexts/ThemeContext";
export default function Home() {
  const [data, setdata] = useState("");
  ////////////////////////////////////////////////////one way to access value of themecontext but here two files is imported  one is usecontext and second one is themecontext so  there is another way to get these usestate value is......
  // const [isdark] = useContext(ThemeContext);
  //////////////////////////////////////////////////////////////////////another way to acess the value is make sepetate file and return value of theme context ///////////

  const [isdark] = Usetheme(); 

  ////////////////////////////////////////////////////////////////
  return (
    <main className={`${isdark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setdata={setdata} />
        <SelectMenu setdata={setdata}  />
      </div>
      <CountriesList data={data} />
    </main>
  );
}
