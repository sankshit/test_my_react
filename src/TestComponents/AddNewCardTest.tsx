import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import themeColorProvider from "../Utils/themeColorProvider";

interface Props {
	action: any,
	title: string,
	isActive: boolean,
};

const useStyles = makeStyles({
	root: {
		width: 226,
		height: 160,
		cursor: "pointer",
		backgroundColor: themeColorProvider("mainColorDark"),
		borderRadius: "10px !important",
		transition: "0.25s ease-in-out",
		boxShadow: "none",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "10px 10px 18px 15px",

	},
	pos: {
		fontFamily: "Roboto",
		fontWeight: 400,
		fontSize: 24,
		textAlign: "center",
		color: themeColorProvider("primaryTextColor"),
	},
	text: {
		marginBottom: 12,
		fontFamily: "Roboto",
		fontWeight: 500,
		fontSize: "14px",
		textAlign: "center",
		color: themeColorProvider("primaryTextColor"),
	},
	hoveredActiveCard: {
		position: "relative",
		animation: "glowingHover 1.5s infinite",
		"&:before": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			borderRadius: "10px",
			padding: "3px",
			background: themeColorProvider("mainGradientBottom"),
			mask: themeColorProvider("glowEffect01"),
			WebkitMask: themeColorProvider("glowEffect01"),
			WebkitMaskComposite: "destination-out",
			animation:
				"borderEffect 0.75s, borderGradShift 1.5s ease-in-out 0s infinite alternate",
		},
		"&:after": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			borderRadius: "10px",
			padding: "3px",
			background: themeColorProvider("mainGradientTop"),
			mask: themeColorProvider("glowEffect01"),
			WebkitMask: themeColorProvider("glowEffect01"),
			WebkitMaskComposite: "destination-out",
			animation:
				"borderEffect 0.75s, borderGradShift 1.5s ease-in-out -1.5s infinite alternate",
		},
	},
	"@keyframes glowingHover": {
		from: {
			boxShadow: `0px 0px 15px -5px ${themeColorProvider(
				"glowingShadowColor01",
			)}, 0px 0px 15px -5px ${themeColorProvider(
				"glowingShadowColor01",
			)} inset, 0px 0px 15px -5px ${themeColorProvider(
				"glowingShadowColor02",
			)}, 0px 0px 15px -5px ${themeColorProvider(
				"glowingShadowColor02",
			)} inset`,
		},
		to: {
			boxShadow: `0px 0px 15px -5px ${themeColorProvider(
				"glowingShadowColor02",
			)}, 0px 0px 15px -5px ${themeColorProvider(
				"glowingShadowColor02",
			)} inset, 0px 0px 15px -5px ${themeColorProvider(
				"glowingShadowColor01",
			)}, 0px 0px 15px -5px ${themeColorProvider(
				"glowingShadowColor01",
			)} inset`,
		},
	},
});
/**
 *
 * @param { boolean } isActive - whether the card is hovered or not
 * @param { string } title - title for the card heading
 * @param { function } action - Function to be executed on click on the card
 * @returns Add New Card component | Used for adding new projects or subProjects
 */
export default function AddNewCard(props: Props) {
	const classes = useStyles();

    const handleAction = () => {
        if (props?.action) {
            props.action(true)
            return null
        }
        console.log("No action defined")
    }

	return (
		<Card
			data-test="AddNewCard"
			onClick={handleAction}
			className={`${classes.root} ${
				props.isActive ? classes.hoveredActiveCard : ""
			} addNewCard`}
		>
			<div data-test="AddNewCardCell">
				<Typography className={classes.pos}>+</Typography>
				<Typography className={classes.text}>{props.title}</Typography>
			</div>
		</Card>
	);
}
