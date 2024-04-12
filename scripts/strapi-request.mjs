import { writeFileSync } from "node:fs"
import qs from "qs"

const url = "http://localhost:1337/api/reviews" + "?" + qs.stringify({
    fields: ['slug', 'title','subtitle','publishedAt'],
    populate: {image:{fields : ['url']}},
    pagination : {pageSize:8}, // this is use foe how to data show in page,
    sort:['publishedAt:desc'] // this is use for data sorting like desc and asc
}, {
    encodeValuesOnly: true
});
const response = await fetch(url)
const body = await response.json()
const formatted = JSON.stringify(body, null, 2)
const file = 'scripts/strapi-request.json';
writeFileSync(file, formatted, "utf8")