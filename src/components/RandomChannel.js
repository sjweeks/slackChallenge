import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
import ContentHeader from './ContentHeader'
import Status from './components/Status.js'

export default function RandomChannel() {
    return (
        <div>
            <Navbar>
                <Status />
            </Navbar>
            <ContentHeader />
            <Content />
        </div>
    )
}
