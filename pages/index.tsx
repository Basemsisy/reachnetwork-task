import type { NextPage } from "next";
import { Card } from "../components/Card";
import FiltersBar from "../components/FiltersBar";

const Home: NextPage = () => {
  return (
    <>
      <div className="container">
        <FiltersBar filtersCount={122321} />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
