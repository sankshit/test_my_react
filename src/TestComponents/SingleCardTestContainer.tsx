import React from "react";
import { getCardData } from "../Utils/apiCalls";
import SingleDisplayCard, { DisplayCardTypes } from "./SingleCardTest";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddNewCard from "./AddNewCardTest";

export const SingleCardTestContainer = (props: any) => {
    const [dataList, setDataList] = React.useState<Array<any>>([]);
    const [loader, toggleLoader] = React.useState(false);
    const [currentActiveTab, toggleCurrentActiveTab] = React.useState(DisplayCardTypes.FORECAST_CARD)
    const [hoverCard, toggleHoverCard] = React.useState(-1)

    React.useEffect(() => {
        getCardData(setDataList, toggleLoader)
    }, [])

    return (
        <Grid container spacing={2} style={{padding: "50px"}}>
            <button onClick={() => props?.history.push("/")}>Go back</button>
            <Grid item xs={12} style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <Button 
                    variant={"contained"} 
                    onClick={() => toggleCurrentActiveTab(DisplayCardTypes.FORECAST_CARD)}
                    disabled={currentActiveTab === DisplayCardTypes.FORECAST_CARD}
                >
                    Show Forecasts
                </Button>
                <Button 
                    onClick={() => toggleCurrentActiveTab(DisplayCardTypes.PROJECT_CARD)} 
                    variant={"contained"}
                    disabled={currentActiveTab === DisplayCardTypes.PROJECT_CARD}
                >
                    Show Projects
                </Button>
            </Grid>
            {
                loader ?
                    <h3>Loading....</h3>
                    :
                    <>
                        <Grid 
                            xs={2} 
                            item
                            onMouseEnter={() => toggleHoverCard(-1)}
                            onMouseLeave={() => toggleHoverCard(-1)}
                        >
                            <AddNewCard
                                title={"Create new Card"}
                                isActive={hoverCard === -1 ? true : false}
                                action={(x: boolean) => console.log(x)}
                            />
                        </Grid>
                        {
                            dataList.filter(x => x.type === currentActiveTab ).map((item, idx) => (
                                <Grid 
                                    xs={2} 
                                    item
                                    key={idx + 1 + "display_card"}
                                    onMouseEnter={() => toggleHoverCard(item.id)}
                                    onMouseLeave={() => toggleHoverCard(-1)}
                                >
                                    <SingleDisplayCard
                                        type={DisplayCardTypes.FORECAST_CARD}
                                        data={item}
                                        isActive={hoverCard === item.id ? true : false}
                                    />
                                </Grid>
                            ))
                        }
                    </>

            }
        </Grid>
    )
}