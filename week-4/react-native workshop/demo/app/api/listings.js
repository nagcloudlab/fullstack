
import client from "./client";

const endpoint = "listings"
const getListings = () => client.get(endpoint)

const addListing = (listing, callback) => {

    const data = new FormData();
    data.append("title", listing.title);
    data.append("price", listing.price);
    data.append("categoryId", listing.category.value);
    data.append("description", listing.description);

    listing.images.forEach((image, index) =>
        data.append("images", {
            name: "image" + index,
            type: "image/jpeg",
            uri: image,
        })
    );

    if (listing.location)
        data.append("location", JSON.stringify(listing.location));

    return client.post(endpoint, data, {
        onUploadProgress: (progress) => {
            callback(progress.loaded / progress.total); // 0, 0.10 , 0.20 0.30 .... 1 🧘‍
        }
    })

}


export default {
    getListings,
    addListing,
}