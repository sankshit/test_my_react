const dummyCardData = [
    {
        id: 0,
        name: "First Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 1,
        name: "Second Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 2,
        name: "Third Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 3,
        name: "Fourth Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 4,
        name: "Fifth Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 5,
        name: "Sixth Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 6,
        name: "Seventh Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 7,
        name: "Eighth Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 8,
        name: "Ninth Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    },
    {
        id: 9,
        name: "Tenth Card",
        completed: false,
        created_at: "2023-01-27T09:55:26.249295+05:30"
    }
]
export const getCardData = (callbackFun: (x: Array<any>) => void, loaderCallback: (x:boolean) => void) => {
    loaderCallback(true);
    setTimeout(() => {
        callbackFun(dummyCardData);
        loaderCallback(false);
    }, 3000)
}