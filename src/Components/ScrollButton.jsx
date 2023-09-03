import React from 'react'
import { useGlobalContext } from '../context'
import {FaArrowCircleUp} from 'react-icons/fa'
import {Button} from './Styles'

const ScrollButton = () => {
    const { visibleScroll, setVisibleScroll } = useGlobalContext()
    const toggleVisibleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisibleScroll(true)
        } else if (scrolled <= 300) {
            setVisibleScroll(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    window.addEventListener('scroll', toggleVisibleScroll)

    return (
        <Button>
            <FaArrowCircleUp onClick={scrollToTop}
                            style = {{display: visibleScroll ? 'inline' : 'none'}} />
        </Button>
    )
}

export default ScrollButton
