import React from 'react'

export default function DefaultLayout({ children }) {
    return (
        <>
            <h1>Default Layout!</h1>
            <div>{children}</div>
        </>
    )
}
