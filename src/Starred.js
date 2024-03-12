import { Message } from "@arco-design/web-react";

import { thunder } from "./apis/axios";
import Content from "./components/Content";
import { ContentProvider } from "./components/ContentContext";

export default function Starred() {
  const getEntries = async (offset = 0, status = null) => {
    const base_url = `/v1/entries?order=published_at&direction=desc&starred=${true}&offset=${offset}`;
    const url = status ? `${base_url}&status=${status}` : base_url;

    try {
      const response = await thunder.request({ method: "get", url });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      Message.error(error.message);
    }
  };

  return (
    <ContentProvider>
      <Content info={{ from: "starred", id: "" }} getEntries={getEntries} />
    </ContentProvider>
  );
}
