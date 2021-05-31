import React, { useState } from 'react';
import { Data } from './Data1';
import styled from 'styled-components';
//import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 300px;
  background: #fef;
`;

const Container = styled.section`
  position: absolute;
  top: 10%;
`;

const Wrapbox = styled.div`
  background: #f2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 1rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  
  color: #00ffb9;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .drop-content{
    // background: blue;
    p {
      font-size: 1rem;
      margin: 0;
      color: red;
    }
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    //<IconContext.Provider value={{ color: 'blue', size: '14px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrapbox onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  {/* <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span> */}
                </Wrapbox>
                {clicked === index ? (
                  <Dropdown>
                    <article className="drop-content">
                      <p>{item.answer}</p>
                    </article>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    //</IconContext.Provider>
  );
};

export default Accordion;


// const AccordionSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   height: 100vh;
//   background: #fff;
// `;

// const Container = styled.div`
//   position: absolute;
//   top: 30%;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
// `;

// const Wrap = styled.div`
//   background: #272727;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   text-align: center;
//   cursor: pointer;
//   h1 {
//     padding: 2rem;
//     font-size: 2rem;
//   }
//   span {
//     margin-right: 1.5rem;
//   }
// `;

// const Dropdown = styled.div`
//   background: #1c1c1c;
//   color: #00ffb9;
//   width: 100%;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-bottom: 1px solid #00ffb9;
//   border-top: 1px solid #00ffb9;
//   p {
//     font-size: 2rem;
//   }
// `;