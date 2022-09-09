import axios from "axios";
import { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import LinkList from "./LinkList";

function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await axios.get("/api/getLinks");
      const { data: links } = await res;
      setLinks(links);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  useEffect(() => {
    loadLinks();
  }, []);
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List O' Links</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
