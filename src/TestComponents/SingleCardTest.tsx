import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { timeDifference } from "../Utils/utils";
import logo from './logo.svg';

export enum DisplayCardTypes {
    PROJECT_CARD = "projectCard",
    FORECAST_CARD = "forecastCard"
}

interface SingleDisplayCardProps {
	type: DisplayCardTypes;
	isActive: boolean;
	data: any;
	history?: any;
}

const useStyles = makeStyles(theme => ({
	root: {
		width: 226,
		height: 160,
		boxShadow: "none",
		cursor: "pointer",
		borderRadius: "10px !important",
		position: "relative",
		padding: "10px 10px 18px 15px",
		transition: "0.25s ease-in-out",
		backgroundColor: "rgba(0,0,0,0.4)",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		paddingTop: 4,
		color: "rgba(0,0,0,0.4)",
		fontFamily: "Roboto",
		fontWeight: 400,
		fontSize: "12px",
		wordBreak: "break-all",
	},
	header: {
		color: "rgba(255,255,255,0.4)",
		fontFamily: "Roboto",
		fontWeight: 500,
		fontSize: "14px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		wordBreak: "break-all",
	},
	date: {
		fontSize: "12px",
		width: "100%",
		color: "red",
	},
	cardAction: {
		paddingLeft: "10px",
		bottom: "3%",
		position: "absolute",
		width: "100%",
	},
	linearBar: {
		bottom: "0px",
		position: "absolute",
		width: "100%",
	},
	popcontainer: {
		padding: "10%",
		width: "70px",
	},
	paper: {
		position: "absolute",
		width: 550,
		backgroundColor: theme.palette.background.paper,
		borderRadius: "5px",
		padding: theme.spacing(2, 4, 3),
	},
	image: {
		width: "26px",
		height: "26px",
		borderRadius: "50%",
	},
	listItem: {
		borderRadius: "5px",
		width: "75%",
		margin: "1%",
	},

	zeroPadding: {
		padding: "0px",
	},
	reportButton: {
		width: "50%",
		height: 24,
		padding: "3px 11px",
		borderRadius: 12,
		border: "solid 1px #000 ",
		backgroundColor: "yellow" ,
		fontSize: "7px",
		zIndex: 100,
		transition: "0.5s ease-in-out",
		"&:hover": {
			backgroundColor: "transparent",
			color: "red",
		},
		"&:disabled": {
			cursor: "not-allowed",
		},
	},
}));

const SingleDisplayCard = (props: SingleDisplayCardProps) => {
	const classes = useStyles();
	// const dispatch = useDispatch();

	const handleRedirection = () => {
		switch (props.type) {
			case DisplayCardTypes.PROJECT_CARD:
                alert("Taking you to projects")
				// dispatch(redirectProjectDetail(props.history, props.data));
				break;
			case DisplayCardTypes.FORECAST_CARD:
                alert("Taking you to Training")
				// dispatch(
				// 	redirectTrainingDetail(props.history, props.data.id, props.data),
				// );
				break;
			default:
				console.log("Redirection not allowed in type:", props.type);
				break;
		}
	};

	const handleReportGenClick = (e:any, _id: number) => {
		e.stopPropagation();
        console.log("Initiating Report Generation")
	};

	return (
		<Card
			data-test="singleCardContainer"
			className={`${classes.root} ${props.isActive ? "hover-active-card" : ""}`}
			onClick={handleRedirection}
		>
			<CardContent classes={{ root: classes.zeroPadding }}>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				></Typography>
				<Typography variant="h5" className={classes.header} component="h2">
					<div>{props.data.name || props.data.file_name}</div>
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{props.data?.description || "..."}
				</Typography>
				{props.type.toUpperCase() === "PURCHASECARD" && (
					<Button
						className={classes.reportButton}
						variant="outlined"
						size="small"
						onClick={e => handleReportGenClick(e, props.data.id)}
						disabled={!props.data.completed}
					>
						Download Report
					</Button>
				)}
			</CardContent>
			<CardActions
				style={{
					padding: "0px",
					bottom: "8%",
					left: "5%",
					position: "absolute",
					width: "90%",
				}}
			>
				<Typography className={classes.date} variant="body2" component="p">
					<div
						style={{
							display: "flex",
							height: "17px",
							alignItems: "center",
							width: "55%",
						}}
					>
						<span style={{ marginLeft: "10px" }}>
							{timeDifference(props.data.created_at.slice(0, 10))}
						</span>
					</div>
				</Typography>
			</CardActions>
		</Card>
	);
};

export default SingleDisplayCard;