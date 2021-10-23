import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { Card } from "../components/Card";
import FiltersBar from "../components/FiltersBar";
import http from "../utils/http";

const Search = () => {
  const { query } = useRouter();
  const searchQuery = query?.query;

  const fetchData = () => {
    return http.get(`/`, {
      params: { q: searchQuery },
    });
  };
  const { data, isLoading, error, isError } = useQuery(
    ["search-results", searchQuery],
    fetchData,
    { enabled: !!searchQuery, staleTime: 100000 }
  );

  if (isLoading) {
    return "loading..";
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className="container">
      <FiltersBar filtersCount={data?.data?.pageInfo?.totalResults} />
      {data?.data?.items?.map((item) => (
        <Card key={item.id.videoId} />
      ))}
    </div>
  );
};
export default Search;

// ?part=snippet&key=AIzaSyAKZw01Sche7TLS1IvfFIw0VZDh1UYETsg&q=spongebob
