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
                    &nbsp; 
                    <sup>
                        Testing around: <br />
                        &nbsp; - data fetching <br />
                        &nbsp; - data rendering<br />
                        &nbsp; - data filtering<br />
                    </sup>
                    <li onClick={() => props.history.push("/virtualListTest")} className="test-list-item">Form Tests</li>
                    &nbsp; 
                    <sup>
                        Testing around: <br />
                        &nbsp; - Form Validations <br />
                        &nbsp; - Form Output<br />
                        &nbsp; - Form Data Calculation<br />
                        &nbsp; - Form Actions<br />
                    </sup>
                </ul>

            </CardContent>
        </Card>
    )
}