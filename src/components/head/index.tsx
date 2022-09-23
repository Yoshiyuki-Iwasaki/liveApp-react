import Head from "next/head";
import Presenter from "./presenter";

const Meta = ({
  title = "Photo Application",
  description = "This is Photo Application!!!!",
}) => {
  return <Presenter title={title} description={description} />;
};

export default Meta;
