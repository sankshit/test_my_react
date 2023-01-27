export const timeDifference = (previous: string) => {
    try {
        let previousTime = new Date(previous).getTime();
    
        let current = new Date().getTime();
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;
    
        var elapsed = current - previousTime;
    
        if (elapsed < msPerMinute) {
            return `${
                Math.round(elapsed / 1000) > 1
                    ? Math.round(elapsed / 1000) + " seconds ago"
                    : Math.round(elapsed / 1000) + " second ago"
            }`;
        } else if (elapsed < msPerHour) {
            return `${
                Math.round(elapsed / msPerMinute) > 1
                    ? Math.round(elapsed / msPerMinute) + " minutes ago"
                    : Math.round(elapsed / msPerMinute) + " minute ago"
            }`;
        } else if (elapsed < msPerDay) {
            return `${
                Math.round(elapsed / msPerHour) > 1
                    ? Math.round(elapsed / msPerHour) + " hours ago"
                    : Math.round(elapsed / msPerHour) + " hour ago"
            }`;
        } else if (elapsed < msPerMonth) {
            return `${
                Math.round(elapsed / msPerDay) > 1
                    ? Math.round(elapsed / msPerDay) + " days ago"
                    : Math.round(elapsed / msPerDay) + " day ago"
            }`;
        } else if (elapsed < msPerYear) {
            return `${
                Math.round(elapsed / msPerMonth) > 1
                    ? Math.round(elapsed / msPerMonth) + " months ago"
                    : Math.round(elapsed / msPerMonth) + " month ago"
            }`;
        } else {
            return `${
                Math.round(elapsed / msPerYear) > 1
                    ? Math.round(elapsed / msPerYear) + " years ago"
                    : Math.round(elapsed / msPerYear) + " year ago"
            }`;
        }
    } catch (err) {
        console.log("Error::::", err)
        return previous
    }
};
