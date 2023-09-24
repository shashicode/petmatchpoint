"use strict";
(() => {
var exports = {};
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 6579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fv1_2Flisting_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fv1_2Flisting_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/v1/listing.ts
var listing_namespaceObject = {};
__webpack_require__.r(listing_namespaceObject);
__webpack_require__.d(listing_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/dbConnect.ts

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = external_mongoose_default().connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
/* harmony default export */ const lib_dbConnect = (dbConnect);

;// CONCATENATED MODULE: ./src/models/Listing.ts

const ListingSchema = new (external_mongoose_default()).Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    pet_age: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        default: "usd"
    },
    country: {
        type: String,
        default: "usa"
    },
    listing_end_date: {
        type: Date,
        required: true
    },
    user_phone: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    plan_type: {
        type: String,
        default: "lifetime"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});
/* harmony default export */ const Listing = ((external_mongoose_default()).models.Listings || external_mongoose_default().model("listings", ListingSchema));

;// CONCATENATED MODULE: ./src/pages/api/v1/listing.ts


async function handler(req, res) {
    await lib_dbConnect();
    if (req.method === "POST") {
        try {
            const { title, desc, price, pet_age, location, currency, country, listing_end_date, user_phone, user_email, plan_type } = req.body;
            const createListing = await Listing.create({
                title,
                desc,
                price,
                pet_age,
                location,
                currency,
                country,
                listing_end_date,
                user_phone,
                user_email,
                plan_type
            });
            if (createListing) {
                res.status(200).send({
                    message: "Listing Created"
                });
            }
        } catch (error) {
            res.status(400).send(error);
        }
    } else if (req.method === "GET") {
        try {
            const getListing = await Listing.find({});
            if (getListing) {
                res.status(200).send(getListing);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    } else if (req.method === "PATCH") {
        try {
            const val = {
                ...req.body
            };
            const filter = {
                id: val.id
            };
            delete val.id;
            const update = {
                ...val
            };
            console.log(filter, update);
            const patchListing = await Listing.findOneAndUpdate(filter, update);
            if (patchListing) {
                res.status(200).send({
                    message: "Listing Updated"
                });
            }
            console.log(patchListing);
        } catch (error) {
            res.status(400).send(error);
        }
    } else if (req.method === "DELETE") {
        try {
            const val = {
                ...req.body
            };
            const filter = {
                id: val.id
            };
            const listingDeleted = await Listing.deleteOne(filter);
            if (listingDeleted) {
                res.status(200).send({
                    message: "Listing Deleted"
                });
            }
        } catch (error) {
            res.status(400).send(error);
        }
    } else {
    // Handle any other HTTP method
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fv1%2Flisting&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fv1%2Flisting.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fv1_2Flisting_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fv1_2Flisting_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(listing_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(listing_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/v1/listing",
        pathname: "/api/v1/listing",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: listing_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(6579)));
module.exports = __webpack_exports__;

})();