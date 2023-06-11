import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import Documentt from './Documentt'

export default function CV() {

    return (
        <>
            <div className='flex justify-center w-full'>
                <PDFViewer width='595' height='842'>
                    <Documentt />
                </PDFViewer>
            </div>
        </>

    )
}
