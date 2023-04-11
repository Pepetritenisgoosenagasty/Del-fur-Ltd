import PageTitle from '@/components/PageTitle'
import AppLayout from '@/components/AppLayout'
import ContactComponent from '@/Features/Contact'


export default function Contact() {
  return (
    <>
     <PageTitle title='Get in touch' />
     <AppLayout>
      <ContactComponent />
     </AppLayout>
    </>
  )
}