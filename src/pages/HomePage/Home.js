import React from 'react'
import {homeObjOne} from './Data'
import InfoSection from '../../components/infoSection/infoSection'

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne}></InfoSection>
        </>
    )
}

export default Home
