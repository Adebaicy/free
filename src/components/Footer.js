import React from "react";
import {
Box,
Hor,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>Company</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">Partnerships</FooterLink>
			<FooterLink href="#">Meet the team</FooterLink>
			<FooterLink href="#">Partnerships</FooterLink>
			<FooterLink href="#">Board of directors</FooterLink>
		</Column>
		<Column>
			<Heading>Links</Heading>
			<FooterLink href="#">Convert</FooterLink>
			<FooterLink href="#">News</FooterLink>
			<FooterLink href="#">Contact us</FooterLink>
			<FooterLink href="#"></FooterLink>
		</Column>
		<Column>
			<Heading>Resources</Heading>
			<FooterLink href="#">Currency Encyclopedia</FooterLink>
			<FooterLink href="#">Historical currency exchange</FooterLink>
			
		</Column>
		<Column>
			<Heading>Product</Heading>
			<FooterLink href="#">API</FooterLink>
			<FooterLink href="#">Integration matrix</FooterLink>
			
		
					</Column>

					<Column>
			<Heading>Support</Heading>
			<FooterLink href="#">Help centre</FooterLink>
			<FooterLink href="#">FAQ</FooterLink>
			<FooterLink href="#">File a complaint</FooterLink>
			<FooterLink href="#">Fraud report</FooterLink>
			
		
					</Column>
					<Column>
			<Heading>Legal</Heading>
			<FooterLink href="#">Privacy Policy</FooterLink>
			<FooterLink href="#">Terms and Conditions</FooterLink>
			<FooterLink href="#">Cookie Policy</FooterLink>
			<FooterLink href="#"></FooterLink>
			
		
					</Column>
					
		</Row>
	

	</Container>

	<Hor/>
	</Box>
);
};
export default Footer;
