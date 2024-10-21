import {
  Card,
  CardContent,
 
} from "@/components/ui/card";
import Link from "next/link";

function RecipeList({ recipeList }) {
  console.log(recipeList);

  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6x1 md:max-w-4x1 sm:max-w-full">
        <h1 className="text-4x1 font-bold text-gray-800 mb-12">Recipes</h1>
        <Link href='/' >Home Page </Link>
        <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8 ">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`/recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full h-ful object-cover aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="p-6">
                        {" "}
                        <h3 className="text-lg font-bold text-gray-900">
                          {recipe.name}
                        </h3>
                      </div>
                      <div className ='mt-4  flex  items-center flex-wrap gap-2'>
                        <p className='text-lg text-gray-600'> Rating : {recipe.rating}</p>
                      <div className='ml-auto'> 
                        <p className='text-lg text-gray-600 font-bold'>{recipe.cuisine}</p>
                      </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;