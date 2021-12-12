import React from 'react';
import ButtonUnderline from './ButtonUnderline';

const HeadingGroupStart = ({ heading, subheading, textColor, buttonColors, variantText = false, variantBtnText = false }) => {
    return (
        <div className={`flex flex-col items-start space-y-5 md:m-0 ${variantText ? '' : 'mb-16 md:max-w-2xl'}`}>
            {
                variantText ?
                <>
                    <h6 className={textColor}>
                        {heading}
                        <br></br>
                        <span className='font-extrabold'>{variantText}</span>
                    </h6>

                    <h5 className={`max-w-2xl lg:max-w-none ${textColor}`}>{subheading}</h5>

                    <ButtonUnderline text={variantBtnText} extraClass={`hidden sm:block ${buttonColors}`}/>
                </> :
                <>
                    <h2 className={textColor}>{heading}</h2>

                    <h4 className={textColor}>{subheading}</h4>

                    <ButtonUnderline text='Learn more' extraClass={buttonColors}/>
                </>
            }
        </div>
    )
}

export default HeadingGroupStart;