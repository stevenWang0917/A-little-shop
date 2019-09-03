/**
 * For running the app with a local server, use the code below:
 */
/*
import { DataTypes } from './Types';

const protocol = 'http';
const hostname = 'localhost';
const port = 3500;

export const RestUrls = {
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`
}

export const GraphQlUrl = `${protocol}://${hostname}:${port}/graphql`;

export const authUrl = `${protocol}://${hostname}:${port}/login`;
//*/

/**
 * For running the app with a remote API, use the code below:
 */
//*
import { DataTypes } from './Types';

const protocol = 'https';
const hostname = 'shop-api-rg.herokuapp.com';

export const RestUrls = {
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}/api/categories`,
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}/api/products`,
    [DataTypes.ORDERS]: `${protocol}://${hostname}/api/orders`
}

export const GraphQlUrl = `${protocol}://${hostname}/graphql`;

export const authUrl = `${protocol}://${hostname}/login`;
//*/

/**
 * For app deployment, use the code below: 
 */
/* 
import { DataTypes } from './Types';

export const RestUrls = {
    [DataTypes.CATEGORIES]: `/api/categories`,
    [DataTypes.PRODUCTS]: `/api/products`,
    [DataTypes.ORDERS]: `/api/orders`
}

export const GraphQlUrl = `/graphql`;

export const authUrl = `/login`;  
//*/