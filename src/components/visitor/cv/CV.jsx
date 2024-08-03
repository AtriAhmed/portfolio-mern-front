import React from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import Documentt from './Documentt'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function CV() {

    return (
        <div id='cv' className="flex flex-col overflow-auto gap-4 w-full min-h-screen" >
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
                <div className="mb-16">
                    <strong className="text-yellow-500">MY CV</strong>
                    <hr></hr>
                    <div className="text-5xl font-black">Career Outline</div>
                </div>
            </AnimationOnScroll >
            <AnimationOnScroll animateIn="animate__rollIn" duration={2}>
                <div className='flex justify-center'>
                    <PDFDownloadLink document={<Documentt />} fileName="AhmedAtriCV.pdf">
                        {({ loading }) =>
                            loading ? <button disabled={true} className='border border-gray text-gray hover:bg-gray font-bold transition duration-200 hover:text-white px-4 py-2 rounded-lg'>DOWNLOAD CV</button> : <button className='border border-white text-white hover:bg-white font-bold transition duration-200 hover:text-black px-4 py-2 rounded-lg'>DOWNLOAD CV</button>
                        }
                    </PDFDownloadLink>
                </div>
                <div className='flex justify-start sm:justify-center'>
                    <PDFViewer width='595' height='842'>
                        <Documentt />
                    </PDFViewer>
                </div>
            </AnimationOnScroll>
        </div>
    )
}
