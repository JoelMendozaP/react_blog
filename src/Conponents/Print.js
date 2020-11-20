import React from 'react'

const Print = (props) => {
    return (
        <div>
            <b>Url: </b>{props.data.Url} 
            <br/>
            <b>Post: </b>{props.data.Post}
        </div>
    )
}

export default Print
