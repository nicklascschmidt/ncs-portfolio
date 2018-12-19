import React from 'react';
import { PDFReader } from 'react-read-pdf'

export default class PDFReaderResume extends React.Component {
  render() {
    return <div style={{overflow:'scroll',height:1150}}>
            <PDFReader url="/resume.pdf" scale={1.4}/>
           </div>
  }
}