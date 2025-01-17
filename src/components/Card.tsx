
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Card = ({bgColor, reviewerImg, reviewerName, reviewerStatus, reviewerHighlight, review }: {bgColor: string, reviewerImg: StaticImageData, reviewerName: string, reviewerStatus:string, reviewerHighlight:string, review:string }) => {
  return (
    <div className={` flex flex-col gap-y-5 bg-[purple] p-8`}>
        <div className='flex gap-5'>
            <Image width={30} height={30} className='rounded-full' src={reviewerImg} alt='' />
            <div>
                <span> {reviewerName} </span>
                <span> {reviewerStatus} </span>
            </div>
        </div>
        <div>
            <p> {reviewerHighlight} </p>
        </div>
        <div>
            <p>
                {review}
            </p>
        </div>

        
    </div>
  )
}

export default Card