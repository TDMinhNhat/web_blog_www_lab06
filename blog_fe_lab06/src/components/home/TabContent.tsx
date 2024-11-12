import HomeContent from "../home/tab_content/HomeContent";
import PostContent from "../home/tab_content/PostContent";
import SupportContent from "../home/tab_content/SupportContent";

export default function TabContent({ tab }: { tab: string }) {
    return (
        <div className="container-fluid w-100 h-100">
            {tab === "Home" && <HomeContent />}
            {tab === "Post" && <PostContent />}
            {tab === "Support" && <SupportContent />}
        </div>
    )
}