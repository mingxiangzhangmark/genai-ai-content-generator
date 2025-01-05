

"use server";

import Query from "@/models/query";
import db from "@/utils/db";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
export async function runAi(text: string) {
 const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });
 const prompt = text;
 const result = await model.generateContent(prompt);
  return result.response.text();
}

export async function saveQuery(
  template: object,
  email: string,
  query: string,
  content: string
) {
  try {
    await db();

    const newQuery = new Query({
      template,
      email,
      query,
      content,
    });

    await newQuery.save();
    return {
      ok: true,
    };
  } catch (err) {
    return {
      ok: false,
    };
  }
}


export async function getQueries(
  email: string,
  page: number,
  pageSize: number
) {
  try {
    await db();

    const skip = (page - 1) * pageSize;
    const totalQueries = await Query.countDocuments({ email });

    const queries = await Query.find({ email })
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 })
      .lean();;

    const plainQueries = JSON.parse(JSON.stringify(queries));

    return {
      queries: plainQueries,
      totalPages: Math.ceil(totalQueries / pageSize),
    };
  } catch (err) {
    return {
      ok: false,
    };
  }
}

export async function usageCount(email: string) {
  await db();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const result = await Query.aggregate([
    {
      $match: {
        email: email,
        $expr: {
          $and: [
            { $eq: [{ $year: "$createdAt" }, currentYear] },
            { $eq: [{ $month: "$createdAt" }, currentMonth] },
          ],
        },
      },
    },
    {
      $project: {
        wordCount: {
          $size: {
            $split: [{ $trim: { input: "$content" } }, " "],
          },
        },
      },
    },
    {
      $group: {
        _id: null,
        totalWords: { $sum: "$wordCount" },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalWords : 0;
}
