import React from "react";
import { getCardData } from "../Utils/apiCalls";
import SingleDisplayCard, { DisplayCardTypes } from "./SingleCardTest";
import Grid from "@material-ui/core/Grid";
import AddNewCard from "./AddNewCardTest";

export const SingleCardTestContainer = () => {
    const [dataList, setDataList] = React.useState<Array<any>>([]);
    const [loader, toggleLoader] = React.useState(false)
    const [hoverCard, toggleHoverCard] = React.useState(-1)

    React.useEffect(() => {
        getCardData(setDataList, toggleLoader)
    }, [])

    return (
        <Grid container spacing={2} style={{padding: "50px"}}>
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
                                title={"Creating new Card"}
                                isActive={hoverCard === -1 ? true : false}
                                action={(x: boolean) => console.log(x)}
                            />
                        </Grid>
                        {
                            dataList.map((item, idx) => (
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