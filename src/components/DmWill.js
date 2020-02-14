import React from 'react'
import Content from './Content'
import ContentHeader from './ContentHeader'
import Navbar from './Navbar'
import Status from './components/Status.js'


export default function DmWill() {
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
