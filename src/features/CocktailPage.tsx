import {useQuery} from "@tanstack/react-query";
import {getCocktailById} from "../services/adapterCocktailDB.ts";
import {useParams} from "react-router";

const CocktailPage = () => {
  const params = useParams();

  const cocktailId = params?.id;

  const {data} = useQuery({
    enabled: !!cocktailId,
    queryKey: ['get-cocktail-by-id', cocktailId],
    queryFn: () => getCocktailById(cocktailId!),
  })
  return (
      <div>{data?.name}</div>
  )
}
export default CocktailPage
