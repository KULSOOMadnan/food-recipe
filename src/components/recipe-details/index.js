import Link from 'next/link'

function RecipeDetails({recipeIngridants}) {
    console.log(recipeIngridants);
    
  return (
  <div>
    <Link href='/recipe-list'>Go to recipe List </Link>
    <div className='p-6 lg:max-w-6xl max-w-2xl mx-auto '>
      <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='w-full lg:sticky top-0 gap-2'>
            <img src={recipeIngridants?.image} alt={recipeIngridants?.name} 
            className='w-4/5 rounded object-cover' />
        </div>
        <div>
            <h2 className='text-3xl font-extrabold text-gray-950'>{recipeIngridants?.name}</h2>
            <div className='flex flex-wrap gap-4 mt-5'>
              <p>{recipeIngridants?.mealType[0]}</p>
            </div>
            <div className='at-5'>
              <p className='text-xl text-gray-800'>{recipeIngridants?.cuisine}</p>
            </div>
            <div className='mt-4'>
              <h3 className='text-lg font-bold text-gray-700'>
                Ingredients
              </h3>
              <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700' key={recipeIngridants.id}>
               { 
                recipeIngridants.ingredients.map((items) => (<li>{items}</li>))
               }
              </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RecipeDetails
