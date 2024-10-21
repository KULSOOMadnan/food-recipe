import { Skeleton } from "@/components/ui/skeleton"


function loading() {
  return (
    <div>
      <Skeleton className={'w-full bg-black min-h-screen'}> </Skeleton>
    </div>
  )
}

export default loading

