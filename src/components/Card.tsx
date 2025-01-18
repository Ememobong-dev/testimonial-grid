
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import reviewIcon from "../../public/images/bg-pattern-quotation.svg";

const Card = ({ reviewerImg, reviewerName, reviewerStatus, reviewerHighlight, review, bgColor, quoteIcon }: { reviewerImg: StaticImageData, reviewerName: string, reviewerStatus:string, reviewerHighlight:string, review:string, bgColor:string, quoteIcon?: boolean }) => {
  return (
    <div className={` h-full shadow-lg shadow-veryDarkGrayishBlue rounded-xl w-full flex flex-col gap-y-5 ${bgColor} p-8`}>
        <div className='flex relative  gap-5'>
            <Image width={28} height={10} className='rounded-full  border border-moderateViolet h-10 w-10' src={reviewerImg} alt='' />
            <div>
                <p className={` font-barLowReg ${bgColor === "bg-white" ? "text-veryDarkGrayishBlue": "text-white"} `}> {reviewerName} </p>
                <p className={`text-opacity-50 font-barLowReg ${bgColor === "bg-white" ? "text-veryDarkGrayishBlue text-opacity-50 ": "text-white text-opacity-50" } `}> {reviewerStatus} </p>
            </div>
            {
                quoteIcon && (
                    <div className='absolute right-20 top-0 z-10'>
                       <Image src={reviewIcon} className='flex left-20' alt='img' />
                    </div>
                )
            }
        </div>
        <div className={` relative z-50 font-barLowReg ${bgColor === "bg-white" ? "text-veryDarkGrayishBlue": "text-white"} `}>
            <p className='text-2xl'> {reviewerHighlight} </p>
        </div>
        <div>
            <p className={`font-barLowReg ${bgColor === "bg-white" ? "text-veryDarkGrayishBlue text-opacity-70 ": "text-white text-opacity-70" } `}>
                &quot;{review}&quot;
            </p>
        </div>

        
    </div>
  )
}

export default Card