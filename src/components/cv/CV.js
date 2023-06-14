import React, { useEffect, useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import Documentt from './Documentt'

export default function CV() {

    return (
        <div >
            <div className="flex flex-col items-center gap-4 justify-center w-full" >
                <PDFDownloadLink document={<Documentt />} fileName="AhmedAtriCV.pdf">
                    {({ loading }) =>
                        loading ? <button disabled={true} className='border border-gray text-gray hover:bg-gray font-bold transition duration-200 hover:text-white px-4 py-2 rounded-lg'>DOWNLOAD CV</button> : <button className='border border-black text-black hover:bg-black font-bold transition duration-200 hover:text-white px-4 py-2 rounded-lg'>DOWNLOAD CV</button>
                    }
                </PDFDownloadLink>

                <PDFViewer width='595' height='842'>
                    <Documentt />
                </PDFViewer>
            </div>
        </div>

    )
}
