"use client";

import {
  useEffect,
  useState,
} from "react";

import TypeCard from "@/components/TypeCard";
import CompanyCard from "@/components/CompanyCard";

import { types }
from "@/data/types";

import { companies }
from "@/data/companies";

import {
  calculateCompanyScore,
  rankCompanies,
}
from "@/lib/matching";

import {
  companyQuestions,
}
from "@/data/companyQuestions";

export default function ResultPage() {

  const [type, setType] =
    useState("");

  const [
    topCompanies,
    setTopCompanies,
  ] = useState<any[]>([]);

  useEffect(() => {

    const storedType =
      localStorage.getItem(
        "type"
      );

    if (storedType) {
      setType(storedType);
    }

    const storedAnswers =
      localStorage.getItem(
        "companyAnswers"
      );

    if (storedAnswers) {

      const answers =
        JSON.parse(
          storedAnswers
        );

      const scores =
        calculateCompanyScore(
          answers,
          companyQuestions
        );

      const ranking =
        rankCompanies(
          scores
        );

      console.log("answers", answers);
console.log("scores", scores);
console.log("ranking", ranking);

      setTopCompanies(
        ranking
      );

      console.log("ranking", ranking);

    }

  }, []);

  if (!type) {

    return (

      <div className="p-8">
        Loading...
      </div>

    );

  }

  const info =
    types[
      type as keyof typeof types
    ];

  return (

    <main
      className="
      max-w-5xl
      mx-auto
      p-8
      "
    >

      <TypeCard
        code={type}
        name={info.name}
        description={
          info.description
        }
        strengths={
          info.strengths
        }
      />

      <div className="mt-12">

        <h2
          className="
          text-2xl
          font-bold
          mb-6
          "
        >
          おすすめ企業 TOP5
        </h2>

        {topCompanies.length === 0 && (

          <div
            className="
            border
            rounded-xl
            p-4
            "
          >
            まだ企業ランキングがありません
          </div>

        )}

<div>
  TOP件数:
  {topCompanies.length}
</div>

        {topCompanies.map(
          (companyResult) => {

            const company =
              companies.find(
                (c) =>
                  c.id ===
                  companyResult.id
              );

            if (!company) {
              return null;
            }

            const matchRate =
              topCompanies.length > 0
                ? Math.round(
                    (
                      companyResult.score /
                      topCompanies[0].score
                    ) * 100
                  )
                : 0;

            return (

              <CompanyCard
                key={company.id}
                company={company}
                matchRate={
                  matchRate
                }
              />

            );

          }
        )}

      </div>

    </main>

  );

}
