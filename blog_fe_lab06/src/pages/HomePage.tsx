import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import TabHeader from "../components/home/TabHeader";
import TabContent from "../components/home/TabContent";
import Footer from "../components/home/Footer";

export default function HomePage() {

  const [tab, setTab] = React.useState("Home");
  const [user, setUser] = React.useState(null);

  return (
    <div>
      <TabHeader tab={tab} setTab={setTab} user={user} setUser={setUser} />
      <TabContent tab={tab} user={user} />
      <Footer />
    </div>
  );
}
