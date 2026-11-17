export function calculateCompanyScore(
  answers: string[],
  questions: any[]
) {

  const scores:
    Record<string, number> = {};

  questions.forEach(
    (question, index) => {

      const answerId =
        answers[index];

      const selected =
        question.options.find(
          (option: any) =>
            option.id === answerId
        );

      if (!selected) {
        return;
      }

      Object.entries(
        selected.companies || {}
      ).forEach(
        ([companyId, score]) => {

          scores[companyId] =
            (scores[companyId] || 0)
            +
            Number(score);

        }
      );

    }
  );

  return scores;

}

export function rankCompanies(
  scores:
    Record<string, number>
) {

  return Object.entries(
    scores
  )

    .sort(
      (a, b) =>
        Number(b[1]) -
        Number(a[1])
    )

    .slice(0, 5)

    .map(
      ([id, score]) => ({
        id,
        score,
      })
    );

}

export function convertToMatchRate(
  ranking: {
    id: string;
    score: number;
  }[]
) {

  if (
    ranking.length === 0
  ) {
    return [];
  }

  const topScore =
    ranking[0].score;

  return ranking.map(
    (company) => ({

      ...company,

      matchRate:
        Math.round(
          (
            company.score /
            topScore
          ) * 100
        ),

    })
  );

}
