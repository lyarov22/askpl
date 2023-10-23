import { Button, Typography } from "@material-tailwind/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Group = () => {
  const router = useRouter()
  const group = router.query.group?.[0]

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
            <Typography variant="h2">Группа {group}</Typography>
            <Typography variant="h4" className="font-normal">Выберите дисциплину для просмотра</Typography>
            <div className="grid grid-cols-9 gap-4">
                <div className='block'>
                    {/* <Typography variant='h6' className='mb-4'>1 этаж:</Typography>
                    <Button color="blue" className="shadow-2xl">
                        П3А
                    </Button> */}
                </div>
            </div>
        </div>
  )
}

export default Group
