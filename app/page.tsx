"use client";
import React, { useState, useEffect } from "react";
import { runAi } from "./actions/ai";
export default function page() {
 // state
 const [response, setResponse] = useState("");
 const [loading, setLoading] = useState(false);
 const handleClick = async () => {
 setLoading(true);
 try {
 const data = await runAi("write a zen story");
 setResponse(data);
 } catch (err) {
 console.error(err);
 } finally {
 setLoading(false);
 }
 };
 return (
 <div>
 <button onClick={handleClick}>Run AI</button>
 <hr />
 <div>{loading ? "Loading..." : response}</div>
 </div>
 );
}