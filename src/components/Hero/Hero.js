import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<img
					style={{
						borderRadius: "120px",
					}}
					className="image"
					width="40%"
					src="./images/luis.png"
					alt=""
				/>
				<SectionTitle main center>
					Welcome To <br />
					Luís Araújo Portfolio
				</SectionTitle>
				<SectionText></SectionText>
				<Button onClick={props.handleClick}>Learn More</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
