import React from 'react';
import axios from 'axios'

export default class MyProfilePage extends React.Component{

    handleUpload()
    {
        axios('https://insta.nextacademy.com/api/v1/images/')
        {
            method: 'POST'
        }
    }

    render(){
        return(
            <div>
                <input type='file'></input>
                <button onChange={this.handleUpload} >Upload</button>
            </div>
        )
    }

}