'use client'
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SwiperProps {
  title: string;
  sTitle: string;
  imagesrc?: string;
}

const Swiper: React.FC<SwiperProps> = ({ title, sTitle, imagesrc }) => {

    const router = useRouter()
    const handleClick = ()=>{
        router.push('https://watcha.com/payment/choose_grade')
    }

  return (
    <div
      className={clsx('w-screen h-screen bg-no-repeat bg-cover')}
      style={{ backgroundImage: `url(${imagesrc})` }}
    >
        <div className='w-full h-screen bg-black bg-opacity-50'>
    <section className='flex justify-center items-center'>
        <div className=' mt-64 text-center'>
        <h2 className='text-5xl text-white font-bold'>{title}</h2>
        <h4 className='text-2xl text-[#eee] text-opacity-70 mt-4'>{sTitle}</h4>
        <button
            className='bg-[#f83062] rounded-full px-4 py-3 text-white font-bold mt-12'
            onClick={handleClick}
        >2주 무료 이용 시작</button>
        </div>
    </section>
    </div>
    </div>
  );
}

export default Swiper;


