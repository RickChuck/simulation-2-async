import React, {Component} from 'react';
import {Route,Switch,Link} from 'react-router-dom';



export default class Wizard extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className='wizard-base-child'>
                    <div className='wizard-base-left'></div>
                    <div className='wizard-base-center'>
                        <div className='add-new-listing-cancel-button'>
                            <h1>Add New Listing</h1>
                            <button>Cancel</button>
                        </div>
                        <div className='wizard3-parent'>
                            <h3>Step 3</h3>
                            <div className='wizard3-dots'>
                                <div className='checkmark'></div>
                                <div className='checkmark'></div>
                                <div className='wizard2-background-dots1'></div>
                                <div className='wizard2-background-dots2'></div>
                                <div className='wizard2-background-dots2'></div>
                            </div>
                            
                            <div className='wizard3-preview-image'>
                            <h3>Preview</h3>
                            </div>
                            
                            <div className='wizard3-imageurl-parent'>
                                <h2>Image URL</h2>
                                <input className='wizard3-imageurl' type='text' />
                            </div>
                            
                            <div className='wizard2-step-buttons'>
                                <Link to='/wizard/2'><button className='wizard2-previous-button'>Previous Step</button></Link>
                                <Link to ='/wizard/4'><button className='wizard2-next-button'>Next Step</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='wizard-base-right'></div>
                </div>
        )
    }
}