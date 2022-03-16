import fetchData from "./book-listing"

it("Api testing", async ()=>{
    const list = await fetchData();
    console.warn( await list.fetchData())

    expect('hi').toEqual('hi')
})