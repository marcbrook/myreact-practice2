import React, {useState} from 'react'
import {Data} from './Data1'
import styled from 'styled-components'
import './Accordion2.scss'

const AccordionBox = styled.section`
    background: blue;
    margin: auto;
    height: 200px;
    width: 1000px;
`




const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = index => {
        if (isOpen === index) {
            //if clicked question is already active, then close it
            return setIsOpen(null);
          }
        setIsOpen(index)
        console.log(`index is ${index} and isOpen is ${isOpen}`);
    }
    return(
        <AccordionBox>
            {Data.map((item, index)=>{
                return (
                    <section className="accordion-wrapper">
                        <div 
                          className={`accordion-title ${isOpen? "open":""}`}
                          onClick={() => toggle(index)}
                          >
                            {/* <h1>What do you call a dog magician?</h1> */}
                            <h1>{item.question}+{isOpen}</h1>
                        </div>
            
                        {isOpen === index ? (
                            
                            <div
                            className={`accordion-item ${!isOpen ? "collapsed":""}`}
                            >
                              {/* <p>A labracadabrador.</p> */}
                              <p>{item.answer} + {isOpen}</p>
                          </div>
                        ): null}
                        
                    </section>
                )
            })}
            
        </AccordionBox>
        
    )
}

export default Accordion

