"use client";
import React, { useState, useEffect } from "react";
import { runAi } from "./actions/ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

export default function page() {
 // state
 const [response, setResponse] = useState("");
 const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
 const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
      setLoading(true);
    try {
  const data = await runAi(query);
  setResponse(data);
  } catch (err) {
  console.error(err);
  } finally {
  setLoading(false);
  }
 };
 return (
  <div className="m-5">
  <form onSubmit={handleClick}>
  <Input
  className="mb-5"
  placeholder="Write something"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  />
  <Button>Generate with AI</Button>
  </form>
  <Card className="mt-5">
        <CardHeader>AI Response will appear here...</CardHeader>
        <CardContent>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReactMarkdown>{response}</ReactMarkdown>
          )}
        </CardContent>
      </Card>

  </div>
 );
}