import React from 'react'
import {Wrapper, Container, Content, Content1, Content2 } from './InvoiceTableDeco';
export const InvoiceTableDeco = () => {

    return (
        <>
            <Container>
            <h2>Invoice<br/></h2>
            
            <Wrapper>
                <Content>
                <h3>Total Amount</h3>
                </Content>
            </Wrapper>
            <Wrapper>
                <Content1>
                <h3>Total Paid</h3>
                </Content1>
            </Wrapper>
            <Wrapper>
                <Content2>
                <h3>Total Due</h3>
                </Content2>
            </Wrapper>
            </Container>
        </>
    )
}
export default InvoiceTableDeco;