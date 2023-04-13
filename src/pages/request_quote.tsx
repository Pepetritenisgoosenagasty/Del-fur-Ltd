import PageTitle from '@/components/PageTitle'
import AppLayout from '@/components/AppLayout'
import QuoteComponent from '@/Features/Quote'


export default function Home() {
  return (
    <>
     <PageTitle title='Del-Fur Ltd. | Request For Quote' />
     <AppLayout>
      <QuoteComponent />
     </AppLayout>
    </>
  )
}