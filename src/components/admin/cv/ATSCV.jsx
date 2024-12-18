import React from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import ATSCVDocument from './ATSCVDocument'

export default function ATSCV() {

    return (
        <div >
            <div className="flex flex-col items-center gap-4 justify-center w-full" >
                <PDFDownloadLink document={<ATSCVDocument />} fileName="AhmedAtriCV.pdf">
                    {({ loading }) =>
                        loading ? <button disabled={true} className='border border-gray text-gray hover:bg-gray font-bold transition duration-200 hover:text-white px-4 py-2 rounded-lg'>DOWNLOAD CV</button> : <button className='border border-black text-black hover:bg-black font-bold transition duration-200 hover:text-white px-4 py-2 rounded-lg'>DOWNLOAD CV</button>
                    }
                </PDFDownloadLink>

                <PDFViewer width='595' height='842'>
                    <ATSCVDocument />
                </PDFViewer>
            </div>
        </div>
    )
}