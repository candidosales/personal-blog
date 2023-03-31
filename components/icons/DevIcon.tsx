import React, {ReactElement} from "react";
import Render from "./Render";
import Svelte from "./Svelte";
import Angular from "./Angular";
import Php from "./PHP";

const DevIcon = ({icon}: {icon: string}): ReactElement => {
  const renderIcon = {
    angular: <Angular />,
    php: <Php />,
    render: <Render />,
    svelte: <Svelte />,
  };

  return <div>{renderIcon[icon]}</div>;
};

export default DevIcon;
