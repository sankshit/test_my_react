const makeItem = (i: number) => ({
    id: i,
    title: `Media heading #${i + 1}`,
    text:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
  });
  
  export default function makeItems(len:number) {
    const rv = [];
    for (let i = 0; i < len; i++) {
      rv.push(makeItem(i));
    }
    return rv;
  }
  