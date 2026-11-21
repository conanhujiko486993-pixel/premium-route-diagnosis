"use client";

import { useEffect, useState } from "react";

import TypeCard from "@/components/TypeCard";
import CompanyCard from "@/components/CompanyCard";

import { types } from "@/data/types";
import { companies } from "@/data/companies";
import { companyQuestions } from "@/data/companyQuestions";

import { CompanyMatch } from "@/types/company";
import { Profile } from "@/types/profile";

import {
  createUserProfile,
  rankCompaniesByProfile,
  convertToMatchRate,
  generateReason,
  generateReasonText,
} from "@/lib/profileMatching";

import ProfileRadarChart
from "@/components/ProfileRadarChart";


export default function ResultPage() {

  const [type, setType] =
    useState("");

  const [
    userProfile,
    setUserProfile,
  ] =
    useState<Profile | null>(
      null
    );

    const medals =

["🥇","🥈","🥉","🏅","🏅"];

  const [
    topCompanies,
    setTopCompanies,
  ] =
    useState<
      CompanyMatch[]
    >([]);

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

    if (!storedAnswers) {
      return;
    }

    const answers =
      JSON.parse(
        storedAnswers
      );

    const calculatedProfile =
      createUserProfile(
        answers,
        companyQuestions
      );

    setUserProfile(
      calculatedProfile
    );

    const ranking =
      rankCompaniesByProfile(
        calculatedProfile,
        companies
      );

    const result =
      convertToMatchRate(
        ranking
      );

    setTopCompanies(
      result
    );

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
    max-w-6xl
    mx-auto

    px-4
    md:px-8

    py-8
    "
  >

    <TypeCard
      code={type}
      name={info.name}
      description={info.description}
      strengths={info.strengths}
    />

    {userProfile && (

      <ProfileRadarChart
        profile={userProfile}
      />

    )}

    {topCompanies.length > 0 && (

      <section
        className="
        mt-12

        relative

        overflow-hidden

        rounded-3xl

        bg-gradient-to-br

        from-amber-400
        via-orange-500
        to-pink-500

        text-white

        shadow-2xl

        p-6
        md:p-10
        "
      >

        <div
          className="
          absolute

          -top-20
          -right-20

          w-72
          h-72

          rounded-full

          bg-white/10

          blur-3xl
          "
        />

        <div className="relative z-10">

          <div
            className="
            text-xs
            md:text-sm

            uppercase

            tracking-[0.2em]

            text-amber-100
            "
          >
            BEST MATCH
          </div>

          <h2
            className="
            mt-3

            text-3xl
            md:text-5xl

            font-black
            "
          >
            🥇 あなたに最適な企業
          </h2>

          <div className="mt-8">

            <div
              className="
              text-4xl
              md:text-6xl

              font-black

              leading-tight
              "
            >
              {topCompanies[0].company.name}
            </div>

            <div
              className="
              mt-3

              text-base
              md:text-xl

              text-amber-50

              leading-relaxed
              "
            >
              {topCompanies[0].company.catchCopy}
            </div>

          </div>

          <div className="mt-8">

            <div
              className="
              text-sm

              text-amber-100
              "
            >
              マッチ率
            </div>

            <div
              className="
              text-6xl
              md:text-8xl

              font-black
              "
            >
              {topCompanies[0].matchRate}%
            </div>

          </div>

          <div
            className="
            mt-8

            flex
            flex-wrap

            gap-3
            "
          >

generateReasonText(
  userProfile,
  topCompanies[0].company.profile,
  topCompanies[0].company.name
)

            {userProfile &&

              generateReason(
                userProfile,
                topCompanies[0].company.profile
              ).map((reason) => (

                <span
                  key={reason}
                  className="
                  px-4
                  py-2

                  rounded-full

                  bg-white/20

                  backdrop-blur

                  font-semibold

                  text-sm
                  md:text-base
                  "
                >
                  ✅ {reason}
                </span>

              ))}

          </div>

          {userProfile && (

            <div
              className="
              mt-8

              rounded-2xl

              bg-white/15

              backdrop-blur

              p-5
              "
            >

              <div
                className="
                text-sm

                uppercase

                tracking-widest

                text-amber-100

                mb-3
                "
              >
                AI診断コメント
              </div>

              <p
                className="
                text-base
                md:text-lg

                text-white

                leading-relaxed
                "
              >
                あなたは
                「
                {generateReason(
                  userProfile,
                  topCompanies[0].company.profile
                ).join("・")}
                」
                を重視する傾向があります。

                {topCompanies[0].company.name}
                はその価値観との一致度が高く、
                特に活躍できる可能性が高い企業です。
              </p>

            </div>

          )}

        </div>

      </section>

    )}

    <section className="mt-12">

      <h2
        className="
        text-3xl
        md:text-4xl

        font-black

        text-slate-900

        mb-8
        "
      >
        🏢 その他おすすめ企業
      </h2>

      {topCompanies
        .slice(1)
        .map(
          (
            companyResult,
            index
          ) => (

            <div
              key={
                companyResult.company.id
              }
            >

              <div
                className="
                mb-2

                text-lg

                font-bold

                text-slate-700
                "
              >
                {
                  medals[
                    index + 1
                  ]
                }
              </div>

              <CompanyCard
                company={
                  companyResult.company
                }
                matchRate={
                  companyResult.matchRate
                }
                reason={
                  userProfile
                    ? generateReason(
                        userProfile,
                        companyResult.company.profile
                      )
                    : []
                }
              />

            </div>

          )
        )}

    </section>

  </main>

);

}
