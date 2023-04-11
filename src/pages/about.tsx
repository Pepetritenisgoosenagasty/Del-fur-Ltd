import PageTitle from '@/components/PageTitle'
import AppLayout from '@/components/AppLayout'
import AboutComponent from '@/Features/About'


export default function About() {
  return (
    <>
     <PageTitle title='Del-Fur | About Us' />
     <AppLayout>
      <AboutComponent />
     </AppLayout>
    </>
  )
}