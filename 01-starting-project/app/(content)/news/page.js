
"use client";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage(){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(()=> {
        async function fetchNews(){
            // Initially set as tr ue because it is loading as it fetches
            setIsLoading(true);
           const response = await fetch('http://localhost:8080/news');

           // If we run into errors fetching from DB
           if (!response.ok){
            setError('Failed to fetch news.')
            // No longer loading as fetch runs into error
            setIsLoading(false);
           }
        
           // If fetch is successful..
        const news = await response.json();
        setIsLoading(false);
        setNews(news);
        }
        
        fetchNews();   
    }, []);

    if (isLoading){
        return <p>Loading...</p>;
    }

    if (error){
        return <p>{error}</p>;
    }

    let newsContent;

    if (news){
        newsContent = <NewsList news={news} />
    }
    return(
        <>
            <h1>News Page</h1>
            {newsContent}
        </>

    )
}