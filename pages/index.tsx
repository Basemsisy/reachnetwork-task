import type { NextPage } from "next";
import { useQuery } from "react-query";
import { Card } from "../components/Card";
import FiltersBar from "../components/FiltersBar";
import Spinner from "../components/Spinner";
import { ResponseType } from "../utils/types";
import http from "../utils/http";

const Home: NextPage = () => {
  const fetchData = async (): Promise<ResponseType> => {
    const res = await http.get(`/`);
    return res.data;
  };
  const { data, isLoading, error, isError } = useQuery<
    ResponseType,
    { message: string }
  >(["search-results"], fetchData, { staleTime: 100000 });

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h2>{error?.message}</h2>;
  }
  return (
    <>
      <FiltersBar filtersCount={data?.pageInfo?.totalResults} />
      <div className="container">
        {data?.items?.map((item: any) => (
          <Card key={item.id.videoId} data={item.snippet} />
        ))}
      </div>
    </>
  );
};

export default Home;
