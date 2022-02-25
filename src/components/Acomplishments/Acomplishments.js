import React from "react";

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
	{ number: 3, text: "Projects for IronHack Web Development Bootcamp" },
	{ number: 7, text: "Years of Hospitality Management" },
	{ number: 50, text: "International Gymnastics Competitions" },
	// { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
);

export default Acomplishments;
