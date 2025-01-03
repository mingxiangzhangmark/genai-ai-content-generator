"use client";
import React, { useState, useEffect } from "react";

import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import QueryTable from "@/components/table/query-table";
import { getQueries } from "@/app/actions/ai";


export default function Page() {
  const [queries, setQueries] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [loading, setLoading] = useState(false);

  interface QueryResponse {
    queries: [];
    totalPages: number;
  }

  // // hooks
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress || "";
 
  useEffect(() => {
    if (page === 1 && email) fetchQueries();
  }, [page, email]);

  useEffect(() => {
    if (page > 1 && email) loadMore();
  }, [page]);

  const fetchQueries = async () => {
    setLoading(true);

    try {
      const res = (await getQueries(email, page, perPage)) as QueryResponse;
      console.log("Fetched Queries:", res.queries);
      setQueries(res.queries);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };



  const loadMore = async () => {
    setLoading(true);
    try {
      const res = (await getQueries(email, page, perPage)) as QueryResponse;
      setQueries([...queries, ...res.queries]);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!queries.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2Icon className="animate-spin mx-2" />
      </div>
    );
  }

  
  return (
    <div>
      <div className="p-10 my-5 mx-5 mb-5 rounded-lg bg-slate-200 dark:bg-slate-800 flex flex-col justify-center items-center">
        <h1 className="text-xl">History</h1>
        <p className="text-sm text-gray-500">Your previous search history</p>
      </div>

      <div className="p-5 rounded-lg flex flex-col justify-center">
        <QueryTable data={queries} />
  
      </div>

      <div className="text-center my-5">
         {page < totalPages && (
          <Button onClick={() => setPage(page + 1)} disabled={loading}>
            {loading ? (
              <Loader2Icon className="animate-spin mx-2" />
            ) : (
              "Load More"
            )}
          </Button>
        )} 
      </div>
    </div>
  )
}
