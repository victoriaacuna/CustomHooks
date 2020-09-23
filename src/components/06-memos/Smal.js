// import React, {memo} from 'react'

// export const Smal = memo(({value}) => {

//     console.log('hola')
//     return (
//         <div>
//             <small>{value}</small>
//         </div>
//     )
// })

// De esta forma nose tendría que importar.
import React from 'react'
export const Smal = React.memo(({value}) => {

    console.log('hola')
    return (
        <div>
            <small>{value}</small>
        </div>
    )
})
