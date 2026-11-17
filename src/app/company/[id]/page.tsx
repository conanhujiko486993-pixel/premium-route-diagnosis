import { companies }
from "@/data/companies";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const company =
    companies.find(
      (c) =>
        c.id === id
    );

  if (!company) {
    return (
      <main className="p-8">
        Company Not Found
      </main>
    );
  }

  return (

    <main
      className="
      max-w-5xl
      mx-auto
      p-8
      "
    >

      <div
        className="
        bg-white
        border
        rounded-3xl
        p-8
        "
      >

        <div
          className="
          text-sm
          text-gray-500
          "
        >
          {company.category}
        </div>

        <h1
          className="
          text-5xl
          font-bold
          mt-2
          "
        >
          {company.name}
        </h1>

        <p
          className="
          text-xl
          text-gray-600
          mt-4
          "
        >
          {company.catchCopy}
        </p>

        <div className="mt-10">

          <h2
            className="
            text-2xl
            font-bold
            mb-4
            "
          >
            企業概要
          </h2>

          <p>
            {company.description}
          </p>

        </div>

        <div className="mt-10">

          <h2
            className="
            text-2xl
            font-bold
            mb-4
            "
          >
            活躍できる特徴
          </h2>

          <div
            className="
            flex
            gap-2
            flex-wrap
            "
          >

            {company.strengths.map(
              (item) => (

                <span
                  key={item}
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-blue-100
                  text-blue-700
                  "
                >
                  {item}
                </span>

              )
            )}

          </div>

        </div>

        <a
          href={
            company.entryUrl
          }
          target="_blank"
          className="
          inline-block
          mt-12
          px-6
          py-4
          bg-blue-600
          text-white
          rounded-xl
          font-bold
          "
        >
          企業サイトを見る
        </a>

      </div>

    </main>

  );
}
