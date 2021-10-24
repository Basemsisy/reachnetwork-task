import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { Card } from "../components/Card";
import FiltersBar from "../components/FiltersBar";
import Spinner from "../components/Spinner";
import { ResponseType } from "../utils/types";
import http from "../utils/http";

const Search: NextPage = () => {
  const { query } = useRouter();
  const searchQuery = query?.query;

  const fetchData = async (): Promise<ResponseType> => {
    const res = await http.get(`/`, {
      params: { q: searchQuery },
    });
    return res.data;
  };
  const { data, isLoading, error, isError } = useQuery<
    ResponseType,
    { message: string }
  >(["search-results", searchQuery], fetchData, {
    enabled: !!searchQuery,
    staleTime: 100000,
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h2>{error?.message}</h2>;
  }
  return (
    <div className="container">
      <FiltersBar filtersCount={data?.pageInfo?.totalResults} />
      {data?.items?.map((item: any) => (
        <Card key={item.id.videoId} data={item.snippet} />
      ))}
    </div>
  );
};
export default Search;
