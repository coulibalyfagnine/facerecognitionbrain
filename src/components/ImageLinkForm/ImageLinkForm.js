import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ()=>{
    return(
        <div>
            <p className='f3'>
                {'this Artificial intelligence API will detect faces in your pictures. Get it a try !'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 form center'>
                    <input className='f4 pa2 w-70 center' type='text'/>
                    <button className='f4 w-30 grow link ph3 pv2 dib white bg-navy'> Detect </button>

                </div>

            </div>
        </div>
    )
}

export default ImageLinkForm;