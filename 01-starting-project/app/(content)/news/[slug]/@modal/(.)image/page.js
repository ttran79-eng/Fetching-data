"use client";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";
export default function InterceptedImagePage({params}){
    //Closes image when user clicks on backdrop
    const router = useRouter();

    // from /[slug] page.js
    const newsItemSlug=params.slug;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);
    
        // Redirects to notFound if newsItem doesn't exist
    if (!newsItem){
            notFound();
    }
    
    return(
        <>
            <div className="modal-backdrop" onClick={router.back}/>
                <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`}></img>
            </div>
            </dialog>
        </>

    )
}