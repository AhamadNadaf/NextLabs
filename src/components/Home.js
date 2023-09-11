import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PricingBody from './Pricing_Body'
import Card from './Card'
import Footer from './Footer'
import './style.css'
import Modal from './Modal'
import Slider from './Slider'
import { useSelector } from 'react-redux'

const Pricing = () => {
    const [cardHighlighte_0_10, setCardHighlighte_0_10] = useState('true')
    const [cardHighlighte_11_20, setCardHighlighte_11_20] = useState('false')
    const [cardHighlighte_21_Above, setCardHighlighte_21_Above] = useState('false')
    const { sliderValue } = useSelector(state => state)

    useEffect(() => {
        if (sliderValue >= 0 && sliderValue <= 10) {
            setCardHighlighte_0_10('true')
            setCardHighlighte_11_20('false')
            setCardHighlighte_21_Above('false')
        } else if (sliderValue >= 11 && sliderValue <= 20) {
            setCardHighlighte_11_20('true')
            setCardHighlighte_0_10('false')
            setCardHighlighte_21_Above('false')
        }
        else {
            setCardHighlighte_21_Above('true')
            setCardHighlighte_0_10('false')
            setCardHighlighte_11_20('false')
        }
    }, [sliderValue])

    return (
        <>
            <Navbar />
            <PricingBody />
            <Slider />
            <div className="container ">
                <div className='row text-center'>
                    <Card header="Free" Price={0} Users={10} Storage={2} support="Email support" button="Sign up for free" Highlighted={cardHighlighte_0_10} />
                    <Card header="Pro" Price={15} Users={20} Storage={10} support="Priority email support" button="Get started" Highlighted={cardHighlighte_11_20} />
                    <Card header="Enterprise" Price={29} Users={30} Storage={15} support="Phone and email support" button="Contact Us" Highlighted={cardHighlighte_21_Above} />
                </div>
                <Modal />
                <Footer />

            </div>
        </>
    )
}

export default Pricing