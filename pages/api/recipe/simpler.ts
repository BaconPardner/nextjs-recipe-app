import { Prisma, prisma } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const getRecipes = async () => {
  return await prisma.recipe.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
      sections: {
        select: {
          sectionIngredients: true,
        },
      },
    },
    orderBy: {
      sections: {
        _count: "asc",
      },
    },
    take: 12,
  });
};

export type RecipeProps = Prisma.PromiseReturnType<typeof getRecipes>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchResults = await getRecipes();
  res.status(200).send(searchResults);
}
