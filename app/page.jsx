import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Swiper from './components/Swiper'
import Imglink from '../util/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Home() {

  let session = await getServerSession(authOptions)
  if(session){
    console.log(session.user)
  }
  return (
    <div className='relative'>
      <Navbar/>
      
      <Swiper
      title="영화, 드라마, 예능, 다큐멘터리, 웹툰을 무제한으로" 
      sTitle="매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요."
      imagesrc={Imglink[0].link1} />
     <Swiper
      title="여럿이 함께, 하나의 이용권으로" 
      sTitle="동시 4개 기기에서 재생이 가능한 프리미엄 이용권을 이용해보세요."
      imagesrc={Imglink[1].link2} />
      <Swiper
      title="이제 TV로 최고의 화질을 경험하세요" 
      sTitle="최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요."
      imagesrc={Imglink[2].link3} />
      <Swiper
      title="이동 중에도 감상을 멈추지 마세요" 
      sTitle="보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요."
      imagesrc={Imglink[3].link4} />
      <Swiper
      title="스마트폰, 태블릿, TV, PC, 크롬캐스트, Android TV에서" 
      sTitle="10만여 편의 콘텐츠를 무제한 스트리밍하세요."
      imagesrc={Imglink[4].link5} />
      {/* <Footer/> */}
    </div>
  )
}
