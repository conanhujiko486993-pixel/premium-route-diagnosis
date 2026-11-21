import Link from "next/link";

import { Company } from "@/types/company";

type Props = {
  company: Company;
  matchRate: number;
  reason?: string[];
};

export default function CompanyCard({
  company,
  matchRate,
  reason = [],
}: Props) {

  return (

    <Link
      href={`/company/${company.id}`}
      className="block mb-6"
    >

      <div
        className="
        bg-white/80
        backdrop-blur

        border
        border-white

        rounded-3xl

        p-8

        shadow-lg

        hover:shadow-2xl
        hover:-translate-y-2

        transition-all
        duration-300
        "
      >

        <div
          className="
          flex
          justify-between
          items-start
          gap-6
          "
        >

          <div>

            <div
              className="
              text-sm
              font-medium
              text-indigo-600
              mb-2
              "
            >
              {company.category}
            </div>

            <h3
              className="
              text-3xl
              font-extrabold
              text-slate-900
              "
            >
              {company.name}
            </h3>

            <p
              className="
              text-slate-600
              mt-2
              leading-relaxed
              "
            >
              {company.catchCopy}
            </p>

          </div>

          <div className="text-right">

            <div
              className="
              text-xs
              uppercase
              tracking-widest
              text-gray-500
              "
            >
              Match
            </div>

            <div
              className="
              text-5xl
              font-black

              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-purple-600

              bg-clip-text
              text-transparent
              "
            >
              {matchRate}%
            </div>

          </div>

        </div>

        <div
          className="
          mt-5
          h-3
          bg-slate-200
          rounded-full
          overflow-hidden
          "
        >

          <div
            className="
            h-full

            bg-gradient-to-r
            from-blue-500
            via-indigo-500
            to-purple-500

            rounded-full

            transition-all
            duration-700
            "
            style={{
              width: `${matchRate}%`,
            }}
          />

        </div>

        {matchRate >= 95 && (

          <div
            className="
            mt-4

            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            bg-amber-100
            text-amber-700

            text-sm
            font-bold
            "
          >
            🏆 BEST MATCH
          </div>

        )}

        <div className="mt-8">

          <h4
            className="
            font-bold
            text-slate-800
            mb-3
            "
          >
            活躍できる特徴
          </h4>

          <div
            className="
            flex
            flex-wrap
            gap-2
            "
          >

            {company.strengths.map(
              (strength) => (

                <span
                  key={strength}
                  className="
                  px-3
                  py-1

                  rounded-full

                  bg-slate-100

                  text-slate-700

                  text-sm
                  font-medium
                  "
                >
                  {strength}
                </span>

              )
            )}

          </div>

        </div>

        {reason.length > 0 && (

          <div
            className="
            mt-8

            rounded-2xl

            bg-gradient-to-r
            from-indigo-50
            to-blue-50

            p-5
            "
          >

            <h4
              className="
              font-bold
              text-indigo-700
              mb-3
              "
            >
              💡 おすすめ理由
            </h4>

            <ul className="space-y-2">

              {reason.map(
                (item) => (

                  <li
                    key={item}
                    className="
                    text-slate-700
                    font-medium
                    "
                  >
                    ✅ {item}
                  </li>

                )
              )}

            </ul>

          </div>

        )}

      </div>

    </Link>

  );

}
