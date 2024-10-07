import React from "react";

export const memo2 = (ParentComponnent) => {
  return class Component extends React.Component {
    shouldCompinentUpdate(nextProps) {
      return JSON.stringify(this.props) !== JSON.stringify(nextProps);
    }
    render() {
      return <ParentComponnent {...this.props} />;
    }
  };
};
