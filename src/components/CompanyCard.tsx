import Link from "next/link";

type Company = {
  id: string;
  name: string;
  category: string;
  catchCopy: string;
};

type Props = {
  company: Company;
  matchRate: number;
};

export default function CompanyCard({
  company,
  matchRate,
}: Props) {
  return (
    <Link
      href={`/company/${company.id}`}
      className="block"
    >
      <div
        className="
        border
        rounded-2xl
        p-6
        mb-4
        bg-white
        shadow-sm
        hover:shadow-lg
        transition
        "
      >
        <div
          className="
          flex
          justify-between
          items-center
          "
        >
          <div>
            <div
              className="
              text-sm
              text-gray-500
              "
            >
              {company.category}
            </div>

            <div
              className="
              text-2xl
              font-bold
              "
            >
              {company.name}
            </div>
          </div>

          <div
            className="
            text-3xl
            font-bold
            text-blue-600
            "
          >
            {matchRate}%
          </div>
        </div>

        <div
          className="
          text-gray-600
          mt-3
          "
        >
          {company.catchCopy}
        </div>

        {matchRate >= 95 && (
          <div
 className="
 h-3
 bg-slate-200
 rounded-full
 mt-3
 overflow-hidden
 "
>

 <div
  className="
  h-3
  bg-gradient-to-r
  from-green-400
  to-blue-500
  "
  style={{
   width:
   `${matchRate}%`
  }}
 />

</div>
        )}
      </div>
    </Link>
  );
}
