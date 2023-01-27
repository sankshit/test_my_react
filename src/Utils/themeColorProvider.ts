// @ts-nocheck

const helpers = {
	gradColor1: "#5682e6",
	gradColor2: "#e19cc1",
	glowColor: "#fff",
};
const themes = {
	crest: {
		/**
		 * Global Dark and Light Colors
		 * $ represents opacity
		 */
		mainColorDark: "rgba(0,0,0,$)",
		mainColorLight: "rgba(255,255,255,$)",
		/**
		 * Global colors
		 * Used for success, failure and running status
		 * all around the place
		 */
		successfullGreen: "#1dc0a7",
		errorRed: "#cd5795",
		running: "#4f4b66",
		navColor: "rgba(0, 0, 0, 0.25)",
		errorRedDark: "#FF6868",
		/**
		 * Training Support Docs Background
		 * Columns Dialog in Training
		 * Granularity BreadCrumbs
		 * Select Menu Backgrounds in AddTrainingModel
		 */
		backgroundColor01: "#4e485a",
		/**
		 * Add New Project and Sub Project Background
		 * Training Support accodrian bg
		 * Cancel menu bg for add training model
		 * Main backgroung for add training model
		 * Open button bg for support docs in add training model
		 */
		backgroundColor02: "#3b3448",
		/**
		 * SCM Dialog main background
		 * Data Modal main background
		 */
		backgroundColor03: "rgba(45, 40, 66, 0.95)",
		/**
		 * Project Resource background color
		 */
		backgroundColor04: "rgba(225, 228, 233, 0.05)",
		backgroundColor05: "#635A75",
		backgroundColor06: "#3A334F",
		backgroundColor07: "#966ADD",
		backgroundColor08: "#252036",
		backgroundColor09: "#3C364E",
		/**
		 * Global Training Toggle active background
		 * Glowing effect in addNewCard as psudo element background
		 */
		mainGradientBottom: `linear-gradient(to bottom, ${helpers.gradColor1}, ${helpers.gradColor2}) !important`,
		/**
		 *
		 * Glowing effect in addNewCard as psudo element background
		 */
		mainGradientTop: `linear-gradient(to top, ${helpers.gradColor1}, ${helpers.gradColor2}) !important`,
		primaryGradient: `linear-gradient(104deg, #5081e8, #ed9ebd 101%)`,
		primaryGradientInverted: `linear-gradient(-104deg, #5081e8, #ed9ebd 101%)`,
		/**
		 * Main Login, Signup background gradient
		 * checkout page for payment background gradient
		 */
		secondaryGradient:
			"linear-gradient(113deg, #1a1b43, rgba(83, 62, 93, 0.23) 130%)",
		/**
		 * glowingShadowColor01, glowingShadowColor02
		 * Glowing effect shadow colors | used mostly along with gradients
		 * Example usage: "0px 0px 15px -5px ${glowingShadowColor01}, 0px 0px 15px -5px ${glowingShadowColor01} inset, 0px 0px 15px -5px ${glowingShadowColor02}, 0px 0px 15px -5px ${glowingShadowColor02} inset"
		 */
		glowingShadowColor01: "#5682e6",
		glowingShadowColor02: "#e19cc1",
		/**
		 * Glow gradient for masking gradients
		 */
		glowEffect01: `linear-gradient(${helpers.glowColor} 0 0) content-box, linear-gradient(${helpers.glowColor} 0 0)`,
		glowEffect02:
			"linear-gradient(137.28deg, #2764E4 -96.41%, #F990B9 155.84%)",
		/**
		 * Used everywhere | mostly used color for text
		 * heavily utilised in the whole project
		 * Caution: Check all the places where the below key is used
		 */
		primaryTextColor: "#f0f0f0",
		/**
		 * Navigation Breadcrumbs: Active breadcrumb abckground color
		 * Icon color for account icon | element hidden currently
		 * Project resource ant tab indicator
		 * Granularity Breadcrumbs: chip background color
		 * Training single card: report download background
		 */
		helperColor01: "#a98acf",
		/**
		 * input fields border all across the platfrom
		 * Add training model heading color
		 * Sub headings for add training model
		 * signup current plan text
		 */
		helperColor02: "#9391a0",
		/**
		 * Hr Divisor text color
		 * Project and subproject card description text
		 * Project dashboard directory for project text color
		 * Project Dashboard training accuracy word text color
		 * Single Training card directory for project text color
		 */
		helperColor03: "#82848c",
		/**
		 * Add Training Model sub headings color for
		 * breadcrumb selection inputs and selection headings
		 */
		helperColor04: "#8992A3",
		/**
		 * NEED TO BE FILLED
		 */
		helperColor05: "#78849D",
		/**
		 * choose plan toggle border
		 * single plan promotion text
		 * SCH/PH text strong color
		 * supportFiles Button (styled button) text color
		 */
		helperColor06: "#A98ACF",
		/**
		 * Project dashboard, project list border
		 * Used in hyperlinks on login screen
		 */
		helperColor07: "#659aff",
		/**
		 * plan dialog coupons redeemed empty counter bar background color
		 */
		helperColor08: "#e29abc",
		/**
		 * Single display card date color
		 * Project Dashboard training card accuracy % color
		 * Validation Stroke color for AvF graph
		 * Used in custom tooltip for the same graph
		 */
		helperColor09: "#ae7ca8",
		/**
		 * Arror color for project list on project dashboard
		 */
		helperColor10: "#9795a0",
		/**
		 * Hovered circular progress color for ProcessLoader
		 */
		helperColor11: "#1242b1",
		/**
		 * Support files container background
		 * Custom Dot Tooltip for AvF chart background
		 */
		helperColor12: "rgba(43, 38, 69, $)",
		/**
		 * $ is for opacity
		 */
		helperColor13: "rgba(169, 138, 207, $)",
		/**
		 * $ is for opacity
		 */
		helperColor14: "rgba(123, 112, 204, $)",
		helperColor15: "#465898",
		helperColor16: "#C8C0CF",
		// Approved Indent color
		helperColor17: "#56AA96",
		// helper color for edited cell in table
		helperColor18: "#FFD882",
		// success color
		helperColor19: "#4B7754",
		helperColor20: "#8F9BB3",
		helperColor21: "#47405C",
		helperColor22: "#EBEBEB",
		helperColor23: "#241f3a",
		helperColor24: "rgba(0, 0, 0, 0.15)",
		helperColor25: "#5F598D",
		helperColor26: "#8F7FA9",
		helperColor27: "#C5CEE0",
		helperColor28: "#4E80E6",
		helperColor29: "#ACA4B2",
		helperColor30: "#544B6E",
		helperColor31: "#B385FF",
		/**
		 * plan dialog coupons redeemed filled counter bar background color
		 */
		barFillColor: "rgba(226, 154, 188, 0.2)",
		thumbColor: "#B0B0B0",
		/**
		 * Counter bar borders to diff b/w different tiles
		 */
		barBorder: "#494255",
		/**
		 * Border color for all inout fields
		 * $ represents opacity
		 */
		borderColor1: "rgba(228, 233, 242, $)",
		borderColor2: "#423F5E",
		borderColor3: "#574E68",
		borderColor4: "#423C58",
		borderColor5: "#C0C0C0",
		/**
		 * Plan container colors
		 * - planContBackground : Main background of plan container
		 * - planActiveTab : Active toggle tab background
		 * - priceDuration : /month text color
		 * - priceStrikeThrough : price strike thorugh color
		 * - priceNew : New price next to striked through price
		 */
		planContBackground: "#3B3448",
		planActiveTab: "#4C3D62",
		priceDuration: "#82848C",
		priceStrikeThrough: "#F16666",
		priceNew: "#E79DBF",
		/**
		 * Graphs and shiz homeboi
		 * actualsStroke: Actuals stroke color and used in custom tooltip
		 * forecastStroke: Forecast stroke color and used in custom tooltop and globalTrainingCardInProgress and Global ReportsList
		 * validationStroke: helperColor09 color
		 * axisStroke: Axis stroke color for the graph
		 */
		actualsStroke: "#7068bb",
		forecastStroke: "rgb(29, 192, 167)",
		axisStroke: "#90A0B7",
		/**
		 * Project Dashboard training __ out of __ *completed* <--- this color
		 */
		completedKeyColor: "#41a0aa",
		/**
		 * Shadow used in DataSetCard Container
		 * Training Card Container
		 */
		shadow1: "rgba(21,42,68,0.31)",
		/**
		 * Navigation Breadcrumbs Colors | background and fonts
		 */
		BCInActive: "rgb(118, 91, 151)",
		BCActiveTextColor: "#121212",
		BCInActiveTextColor: "#181834",
		/**
		 * Hr Divisor color
		 */
		divisiorColor: "#222b45",
		/**
		 * Accuracy bar color
		 */
		accuracyBarColor: "#7b70cc",
		/**
		 * Helper color
		 * Key columns slections
		 */
		inventoryHelperColor1: "#ac80f0",
		/**
		 * actionRequired
		 */
		actionRequired: "#FFD882",

		IAMtableHeaderBG: "#332C4A",
		IamModalBG: "#47405C",
		IAMtableHeaderText: "#F6F6F6",
		IamBackground: "#252036",
		IamCellText: "#F6F6F6",
		IamDropDownBG: "#544B6E",
		IamCompanyBG: "#DAB4FF",
		IamDropDownLabel: "#EBEBEB",
		IamFilterBG: "#504868",
		IamFooterTextColor: "#CA95FF",
	},
};

const themeColorProvider = (colorName: string, opacity: number | string = 1) => {
	let color = "red";
	if (themes?.crest?.[colorName]) {
		color = themes.crest?.[colorName];
		if (color.includes("rgba")) {
			color = color.replace("$", opacity || 1);
		}
	} else if (helpers[colorName]) {
		color = helpers[colorName];
		if (color.includes("rgba")) {
			color = color.replace("$", opacity || 1);
		}
	}
	return color;
};

export default themeColorProvider;
