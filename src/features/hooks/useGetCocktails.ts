import {getAlcoholicCocktails} from "../../services/cocktailAdapter.ts";
import {useQuery} from "@tanstack/react-query";


const useGetCocktails = () => {
  const {data: cocktails, isLoading} = useQuery({
    queryKey: ['get-cocktails-with-alchool'],
    queryFn: () => getAlcoholicCocktails()
  });

  return {
    cocktails: cocktails ?? [],
    isLoading
  }
}
export default useGetCocktails
