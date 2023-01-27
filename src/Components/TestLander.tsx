import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";


export const TestLander = (props: any) => {
    return (
        <Card>
            <CardHeader
                title={"Welcome to React Test Suite"}
            >
            </CardHeader>
            <CardContent>
                <h4>Pick one of the test from below:</h4>
                <ul>
                    <li onClick={() => props.history.push("/singleCardTest")} className="test-list-item">Card List Tests</li>
                    <li onClick={() => props.history.push("/virtualListTest")} className="test-list-item">Virtual List Tests</li>
                </ul>

            </CardContent>
        </Card>
    )
}