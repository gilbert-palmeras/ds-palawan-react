import React from "react";
import { useRouter } from "next/router";

const Listing = () => {

    const router = useRouter()
    const slug = (router.query.slug as string[]) || []

    return (
        <p>this is a listing of { slug }</p>
    )
};

export default Listing;