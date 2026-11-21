import Link from "next/link";

export default function Home() {
  return (
    <main
      className="
      min-h-screen
      bg-slate-50
      flex
      items-center
      justify-center
      "
    >
      <div
        className="
        max-w-4xl
        text-center
        px-6
        "
      >
        <div
          className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-blue-100
          text-blue-700
          mb-6
          "
        >
          プレミアルート企業診断
          あなたに最適な企業がわかる
          16タイプ診断 × 20社マッチング
        </div>

        <h1
  className="
  text-5xl
  md:text-7xl

  font-black

  text-slate-900

  leading-tight
  "
>
  あなたに合う企業を
  見つけよう
</h1>

        <p
  className="
  mt-6

  text-xl

  text-slate-600
  "
>

          16タイプ診断と
          20社マッチングで
          最適な企業をレコメンド
        </p>

        <Link
          href="/diagnosis"
          className="
          inline-block
          px-8
          py-4
          bg-blue-600
          text-white
          rounded-xl
          font-bold
          "
        >
          診断を開始する
        </Link>
      </div>
    </main>
  );
}
