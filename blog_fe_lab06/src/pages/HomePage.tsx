import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import TabHeader from "../components/home/TabHeader";
import TabContent from "../components/home/TabContent";
import Footer from "../components/home/Footer";

export default function HomePage() {
  const [tab, setTab] = React.useState("Home");

  return (
    <div>
      <TabHeader tab={tab} setTab={setTab} />
      <TabContent tab={tab} />
      <Footer />
    </div>
  );
}
