import { Company } from "@/types/company";
import { CompanyMatch } from "@/types/company";
import { CompanyQuestion } from "@/types/question";
import { Profile } from "@/types/profile";

export const PROFILE_KEYS = [

  "salary",

  "growth",

  "global",

  "welfare",

  "social",

  "specialty",

  "entrepreneurship",

  "management",

  "workLifeBalance",

] as const;

export const PROFILE_LABELS = {

  salary: "高収入志向",

  growth: "成長志向",

  global: "グローバル志向",

  welfare: "福利厚生重視",

  social: "社会貢献志向",

  specialty: "専門性志向",

  entrepreneurship: "起業家志向",

  management: "経営志向",

  workLifeBalance:
    "ワークライフバランス重視",

} as const;

export const emptyProfile: Profile = {

  salary: 0,

  growth: 0,

  global: 0,

  welfare: 0,

  social: 0,

  specialty: 0,

  entrepreneurship: 0,

  management: 0,

  workLifeBalance: 0,

};

export function createUserProfile(
  answers: string[],
  questions: CompanyQuestion[]
): Profile {

  const profile: Profile = {
    ...emptyProfile,
  };

  questions.forEach(
    (question, index) => {

      const answerId =
        answers[index];

      const selected =
        question.options.find(
          (option) =>
            option.id === answerId
        );

      if (!selected) {
        return;
      }

      Object.entries(
        selected.profile || {}
      ).forEach(
        ([key, value]) => {

          profile[
            key as keyof Profile
          ] += Number(value);

        }
      );

    }
  );

  return profile;

}

export function calculateMatchScore(
  userProfile: Profile,
  companyProfile: Profile
): number {

  let score = 0;

  PROFILE_KEYS.forEach(
    (key) => {

      score +=
        userProfile[key]
        *
        companyProfile[key];

    }
  );

  return score;

}

export function rankCompaniesByProfile(
  userProfile: Profile,
  companies: Company[]
): CompanyMatch[] {

  return companies

    .map((company) => ({

      company,

      score:
        calculateMatchScore(
          userProfile,
          company.profile
        ),

      matchRate: 0,

    }))

    .sort(
      (a, b) =>
        b.score - a.score
    )

    .slice(0, 5);

}

export function convertToMatchRate(
  ranking: CompanyMatch[]
): CompanyMatch[] {

  if (
    ranking.length === 0
  ) {
    return [];
  }

  const maxScore =
    ranking[0].score;

  return ranking.map(
    (company) => ({

      ...company,

      matchRate:
        Math.round(
          (
            company.score /
            maxScore
          ) * 100
        )

    })
  );

}

export function getTopProfileTraits(
  profile: Profile
): string[] {

  return Object.entries(
    profile
  )

    .sort(
      (a, b) =>
        b[1] - a[1]
    )

    .slice(0, 3)

    .map(
      ([key]) =>
        PROFILE_LABELS[
          key as keyof typeof PROFILE_LABELS
        ]
    );

}

export function generateReason(
  userProfile: Profile,
  companyProfile: Profile
): string[] {

  return PROFILE_KEYS

    .filter(
      (key) =>

        userProfile[key] >= 3 &&

        companyProfile[key] >= 4

    )

    .slice(0, 3)

    .map(
      (key) =>
        PROFILE_LABELS[key]
    );

}

export function generateReasonText(
  userProfile: Profile,
  companyProfile: Profile,
  companyName: string
): string {

  const reasons =
    generateReason(
      userProfile,
      companyProfile
    );

  if (
    reasons.length === 0
  ) {

    return `${companyName}は、あなたの価値観と総合的に高い一致が見られました。`;

  }

  if (
    reasons.length === 1
  ) {

    return `あなたは「${reasons[0]}」を強く重視する傾向があります。${companyName}はその価値観との一致度が高く、活躍が期待できる企業です。`;

  }

  return `あなたは「${reasons.join("・")}」を重視する傾向があります。${companyName}はこれらの価値観と高い一致があり、特に活躍できる可能性が高い企業です。`;

}
