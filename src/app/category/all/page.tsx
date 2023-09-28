import axios from "axios";

async function getData() {
  try {
    const res = await axios.get("http://localhost:3000/api/v1/listing");
    return res;
  } catch (error) {
    console.log('request failed: ', error);
  }
}

export default async function Category() {
  const listingData = await getData();
  // console.log("listing data: ", listingData.data[0]);
  return (
    <div className="">
      {listingData && listingData.statusText === "OK" && 
        <div className="">
            {listingData.data.map((item: any) => {
                return <div className="" key={item._id}>
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                    <p>{item.price}</p>
                    <p>{item.currency}</p>
                </div>
            })}
        </div>
      }
    </div>
  );
}
