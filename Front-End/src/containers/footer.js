import React from 'react'

import Footer from '../Components/footer'

export function FooterContainer(){
    return(
            <Footer>
                <Footer.Wrapper>
                 <Footer.Row>
                 <Footer.Column>
                    <Footer.Link href="#">Gift Cards</Footer.Link>
                    <Footer.Link href="#">Promotions</Footer.Link>
                    <Footer.Link href="#">Find a store</Footer.Link>
                    <Footer.Link href="#">Sign up for Email</Footer.Link>
                    <Footer.Link href="#">Send us feedback</Footer.Link>
                    </Footer.Column>
                 <Footer.Column>
                    <Footer.Title>About Dot Drip</Footer.Title>
                    <Footer.Link href="#">News</Footer.Link>
                    <Footer.Link href="#">Careers</Footer.Link>
                    <Footer.Link href="#">Purpose</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                    <Footer.Title>Get Help</Footer.Title>
                    <Footer.Link href="#">Order Status</Footer.Link>
                    <Footer.Link href="#">Shipping and Delivery</Footer.Link>
                    <Footer.Link href="#">Returns</Footer.Link>
                    <Footer.Link href="#">Payment Options</Footer.Link>
                    <Footer.Link href="#">Gift Card Balance</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Youtube</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                    </Footer.Column>
                    </Footer.Row>
                </Footer.Wrapper>
            </Footer>
    )
}