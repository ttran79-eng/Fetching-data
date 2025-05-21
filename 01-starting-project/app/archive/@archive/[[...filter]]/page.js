import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({params}){
    const filter = params.filter;
    //Selects the first index which is year.
    const selectedYear = filter?.[0];
    // Selects the second index which is months.
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    // This changes the links to months after selecting a year filter
    if (selectedYear && !selectedMonth){
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth){
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
    }


    // Default content if no news found
    let newsContent = <p>No news found for the selected period.</p>
    
    //Displays all the news if found
    if (news && news.length >0){
        newsContent = <NewsList news={news} />
    }


    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link)=> { 
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : 
                            `/archive/${link}`
                            return(
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>

    )
}