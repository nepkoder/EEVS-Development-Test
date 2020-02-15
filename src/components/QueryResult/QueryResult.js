import React from 'react';

const QueryResult = (props) => {

    return (
    <div className="app-content">

        {
            props.result.length ===0 ?
            <h3>No Result Found</h3> 
            :

    <div className="item" style={{width: "unset"}}>
            <h3>Search Result</h3>
    <ul>
        {
        props.result.map( (item) => {
            return (<li key={item.id}>{item.value}
            
                <img src="{item.icon_url}" alt="{item.id}" />

                {
                    item.categories.length > 0 ?
                    item.categories.map( (cate,i) => <p key={i}>Categories: <strong>{cate}</strong></p>)
                    :
                    null
                }
                <p>Created At: <strong>{item.created_at}</strong></p>
                {/* <p>Updated At: <strong>{item.created_at}</strong></p> */}

            </li>)
        })
        }
    </ul>

    </div>
    }

</div>
)

}

export default QueryResult;