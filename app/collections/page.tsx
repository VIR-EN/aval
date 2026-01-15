import CollectionsClient from "@/components/collections/CollectionsClient";
import {Header} from "@/components/sections/Header";
import {Footer} from "@/components/sections/Footer";

export default function CollectionsPage() {
    return(
        <>
            <Header/>
            <CollectionsClient />
            <Footer/>
        </>
    )
}