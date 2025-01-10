import RecipeCard from "../recipeCard/RecipeCard";
import style from "./discoveryMain.module.css";

export default function DiscoveryPage() {
  return (
    <main className={style.main}>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </main>
  );
}
