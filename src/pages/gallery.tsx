import PageTitle from '@/components/PageTitle'
import AppLayout from '@/components/AppLayout'
import GalleryComponent from '@/Features/Gallery'


export default function Contact() {
  return (
    <>
     <PageTitle title='Gallery' />
     <AppLayout>
      <GalleryComponent />
     </AppLayout>
    </>
  )
}