import React from 'react';
import AlertBar from '../Components/AlertBar';
import Navbar from '../Components/Navbar';
import Link from '../Components/Link';
import ButtonUnderline from '../Components/ButtonUnderline';
import HeadingGroupEmail from '../Components/HeadingGroupEmail';
import HeadingGroupStart from '../Components/HeadingGroupStart';
import GridElement from '../Components/GridElement';
import FooterDropdown from '../Components/FooterDropdown';
import { NavbarData } from '../SampleData/NavbarData';
import { CompanyData } from '../SampleData/CompanyData';
import { GridElementsData } from '../SampleData/GridElementsData';
import { FooterData } from '../SampleData/FooterData';
import { FooterDataMobile } from '../SampleData/FooterDataMobile';
//svg version of 'sampleImage1' causes app to crash
import sampleImage1 from '../Res/Images/Group 3333.png';
import sampleImage2 from '../Res/Images/Group 3336.svg';
import sampleImage2Mobile from '../Res/Images/Group 3287.svg';
import sampleImage3 from '../Res/Images/Group 2735.svg';
import sampleImage4 from '../Res/Images/Group 2775.svg';
import sampleImage5 from '../Res/Images/Group 3487.svg';
import sampleImage6 from '../Res/Images/Man.png';
import { ReactComponent as UpArrowIcon } from '../Res/Icons/arrow_upward.svg';

const Home = () => {
    return (
        <div>
            <AlertBar text='Scelerisque egestas et euismod.' linkText='Take me there' linkURL='www.google.com'/>

            <Navbar navbarData={NavbarData}/>

            <div className='flex flex-col items-center justify-evenly space-y-8 px-5 pb-10 pt-0 bg-blue-900 sm:pb-16 md:pt-10 xl:flex-row xl:py-40'> 
                <HeadingGroupEmail
                    heading='Vel quis feugiat pharetra diam viverra quis.'
                    subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus hendrerit dignissim duis fringilla sit. Lacus porttitor neque ipsum.'
                    textColor='text-white'
                    buttonText='Get a demo'
                    extraClass='hidden md:block'
                />
                <HeadingGroupEmail
                    heading='Vel quis feugiat pharetra diam viverra quis.'
                    subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna risus hendrerit dignissim duis fringilla sit. Lacus porttitor neque ipsum.'
                    textColor='text-white'
                    buttonText='Request a demo'
                    extraClass='md:hidden'
                />
                <img src={sampleImage1} alt='sample-img-1'/>
            </div>

            <div className='flex flex-col items-center justify-evenly px-5 py-16 space-y-20 lg:px-0 lg:py-36 lg:space-y-20'>
                <h3 className='text-blue-900 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant.</h3>
                <div className='hidden lg:flex items-center justify-evenly w-full'>
                    {
                        CompanyData.map((curr, index) =>
                            <img key={index} src={curr} alt={`company ${index}`}/>
                        )
                    }
                </div>
                <div className='flex items-center justify-around w-full px-3 sm:justify-evenly lg:hidden'>
                    {
                        CompanyData.map((curr, index) =>
                            index === 2 || index === 3 ?
                            <img key={index} src={curr} alt={`company ${index}`}/> :
                            null
                        )
                    }
                </div>
                <ButtonUnderline text='Ut eleifend.' extraClass='text-blue-900 underline-blue-600'/>
            </div>

            <div className='px-5 pb-14 md:px-0 md:pb-28'>
                <div className='flex items-center justify-center md:justify-start md:pl-5 lg:pl-32 xl:pl-52 2xl:pl-96'>
                    <HeadingGroupStart 
                        heading='Sem enim cursus orci at.'
                        subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, vitae et, vitae et cursus amet
                        tincidunt feugiat nulla. Senectus maecenas diam risus sodales dictum eu. Eget cursus sit bibendum
                        pulvinar faucibus vitae nam sed. Faucibus vel laoreet.'
                        textColor='text-blue-900' 
                        buttonColors='text-blue-900 underline-blue-600'
                    />
                </div>
                <div className='flex items-center justify-center md:justify-end md:pr-5 lg:pr-32 xl:pr-52 2xl:pr-96'>
                    <img src={sampleImage2} alt='sample-img-2' className='hidden md:block md:max-w-2xl lg:max-w-3xl'/>
                    <img src={sampleImage2Mobile} alt='sample-img-2-Mobile' className='md:hidden'/>
                </div>
            </div>

            <div className='flex flex-col items-center justify-evenly mx-5 space-x-0 space-y-16 px-10 pt-10 pb-2 bg-gradient-to-b from-blue-100 to-blue-50
                md:space-y-20 md:pt-20 md:pb-10 lg:mx-10 xl:flex-row xl:justify-end xl:space-x-0 xl:space-y-0 xl:px-0 xl:py-32 
                xl:bg-gradient-to-r xl:from-blue-100 xl:to-blue-50 2xl:space-x-60'>
                <div className='flex flex-col space-y-5 md:max-w-xl'>
                    <h2 className='text-blue-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis.</h2>
                    <h4 className='text-blue-900'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ullamcorper id tristique tincidunt. Tincidunt feugiat at mi feugiat hendrerit. 
                        Ac faucibus accumsan, quis lacus, lectus eget bibendum. At praesent quisque sollicitudin fusce.
                    </h4>
                </div>
                <img src={sampleImage3} alt='sample-img-3'/>
            </div>

            <div className='flex flex-col items-center space-y-2 pt-12 pb-0 md:space-y-5 md:pt-24 xl:space-y-20 xl:pt-32 xl:pb-10'>
                <div className='flex flex-col items-center space-y-5 px-5 lg:p-0'>
                    <h2 className='text-center'>Dui tellus quis magna id ultricies eu sed.</h2>
                    <h4 className='text-center w-full lg:w-9/12 xl:w-7/12'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vestibulum molestie amet, maecenas id amet.
                         Ipsum accumsan arcu, aenean viverra penatibus quis. Laoreet.
                    </h4>
                </div>
                <img src={sampleImage4} alt='sample-img-4'/>
            </div>

            <div className='flex flex-col items-center mx-5 px-5 py-10 bg-blue-600 sm:py-14 md:py-20 lg:mx-10 lg:py-40'>
                <div className='flex items-center justify-center w-full lg:justify-start lg:pl-32 xl:pl-40 2xl:pl-96'>
                    <HeadingGroupStart 
                        heading='Ultrices euismod curabitur sapien nunc.'
                        subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat neque dignissim morbi 
                        lacinia volutpat est. Pulvinar scelerisque at urna elit quisque pellentesque. Quam cursus.'
                        textColor='text-white' 
                        buttonColors='text-white underline-white'
                    />
                </div>
                <div className='flex items-center justify-center w-full lg:justify-end lg:pr-32 xl:pr-40 2xl:pr-96'>
                    <img src={sampleImage5} lat='sample-img-5'/>
                </div>  
            </div>

            <div className='flex flex-col items-center justify-evenly space-y-10 py-10 px-5 md:px-0 lg:flex-row lg:space-y-0 lg:py-40'>
                <img src={sampleImage6} alt='sample-image-6' className='sm:w-96 lg:w-1/3'/>
                <div className='flex flex-col items-center space-y-10 lg:items-start lg:space-y-20 lg:max-w-lg xl:max-w-xl xl:space-y-40'>
                    <HeadingGroupStart 
                        heading='Viverra enim diam gravida risus nisl.'
                        subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim vel.'
                        textColor='text-blue-900' 
                        buttonColors='text-blue-900 underline-blue-600'
                        variantText='Lectus eu.'
                        variantBtnText='Ut convallis massa.'
                    />
                    <div className='grid grid-rows-2 grid-cols-3 gap-1'>
                        {
                            GridElementsData.map((curr, index) =>
                                <GridElement
                                    key={index}
                                    elementColor={curr}
                                />
                            )
                        }
                    </div>
                    <ButtonUnderline 
                        text='Read Customer Story' 
                        extraClass='block sm:hidden text-blue-900 underline-blue-600'
                    />
                </div>       
            </div>

            <div className='bg-blue-900 px-5 py-16 md:px-10 md:py-20 xl:p-20'>
                <HeadingGroupEmail
                    heading='Tristique tempus tincidunt.'
                    subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    textColor='text-white'
                    buttonText='Get a demo'
                    extraClass='mb-40 xl:mb-56'
                />
                <div className='flex flex-col items-start justify-center mb-10 space-y-10
                    xl:flex-row xl:justify-between xl:mb-28 xl:space-y-0'>
                    <div className='hidden grid-cols-4 md:grid md:gap-x-8 lg:gap-x-20 xl:gap-x-8 md:gap-y-6 2xl:gap-x-20'>
                        {
                            FooterData.map((curr, index) => 
                                index <= 3 ?
                                <h4 key={index} className='text-white font-semibold'>{curr}</h4> :
                                null
                            )
                        }
                        {
                            FooterData.map((curr, index) =>
                                index > 3 ?
                                <div key={index} className='flex flex-col justify-start space-y-2'>
                                    {
                                        curr.map((currLinkObj, idx) => 
                                            <Link key={idx} text={currLinkObj.text} url={currLinkObj.url}/>
                                        )       
                                    }
                                </div> :
                                null
                            )
                        }
                    </div>

                    <div className='flex flex-col w-full md:hidden'>
                        {
                            FooterDataMobile.map((curr, index) =>
                                <FooterDropdown
                                    key={index}
                                    heading={curr.heading} 
                                    linksData={curr.links} 
                                    isOpen={curr.isOpen}
                                />
                            )
                        }
                    </div>

                    <div className='relative border border-white-rgba-04 px-5 py-5 max-w-md lg:px-4 lg:py-6 xl:max-w-xs'>
                        <h6 className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat arcu hendrerit eleifend ullamcorper. Ut fermentum.
                        </h6>

                        <button className='absolute top-2 right-2 fill-current text-white'>
                            <UpArrowIcon/>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center space-y-6 w-full 
                    xl:flex-row xl:justify-between xl:space-y-0'>
                    <div className='flex flex-col items-start space-y-8 max-w-md md:max-w-2xl xl:space-y-10'>
                        <h6 className='text-white font-extrabold'>Diam egestas ultrices odio vitae.</h6>
                        <h6 className='text-white-rgba-04 font-thin'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor proin tempor sed
                                fermentum sit pretium pellentesque. Dictumst risus elementum dignissim risus, lobortis molestie. 
                        </h6>
                    </div>
                    <div className='flex flex-row items-center space-x-8 sm:space-x-10'>
                        <Link text='Ultrices posuere.' url='https://www.lipsum.com/'/>
                        <Link text='Ac blandit.' url='https://www.lipsum.com/'/>
                        <Link text='Ut hac et.' url='https://www.lipsum.com/'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

//https://www.notion.so/togetheragency/Frontend-Exercise-07af991082454ebe90c1b41f658c1778 