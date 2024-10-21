import RecipeList from "@/components/recipe-list";

async function fetchListData() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();

    return data?.recipes

  } catch(e){
    throw new Error(e)
    
  }
}

async function page() {
  const recipeList = await fetchListData();
  return <RecipeList recipeList={recipeList} />;
}

export default page;
