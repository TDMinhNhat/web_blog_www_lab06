import HomeContent from "./tab_content/HomeContent";
import PostContent from "./tab_content/PostContent";
import SupportContent from "./tab_content/SupportContent";
import ProfileContent from "./tab_content/ProfileContent";

export default function TabContent({ tab, user }: { tab: string, user: object }) {
    return (
        <div className="container-fluid w-100 h-100">
            {tab === "Home" && <HomeContent />}
            {tab === "Post" && <PostContent user = {user} />}
            {tab === "Support" && <SupportContent />}
            {tab === "Profile" && <ProfileContent user={user} />}
        </div>
    )
}