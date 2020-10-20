import lovePizzafetch from "../lovePizzafetch/index";
import { useQuery } from "react-query";
export default function usePizzas() {
  return useQuery("pizzas", lovePizzafetch("/pizzas"));
}
