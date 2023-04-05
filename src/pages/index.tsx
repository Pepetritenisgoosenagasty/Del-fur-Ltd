import PageTitle from '@/components/PageTitle'
import AppLayout from '@/components/AppLayout'
import HomeComponent from '@/Features/Home'



export default function Home() {
  return (
    <>
     <PageTitle title='Del-Fur Ltd.' />
     <AppLayout>
      <HomeComponent />
     </AppLayout>
    </>
  )
}
