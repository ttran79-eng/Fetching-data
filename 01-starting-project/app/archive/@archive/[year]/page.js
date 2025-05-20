import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({params}){
    const newYears = params.year;
    const news = getNewsForYear(newYears);
    
    return(
         <NewsList news={news}/>
    )
}