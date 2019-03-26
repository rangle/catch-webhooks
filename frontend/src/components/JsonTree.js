import React from 'react';
import ReactJson from 'react-json-view';

const JsonTree = ({ json, config = {} }) => {
  const { expand = 2 } = config;

  return (
    <ReactJson
      src={json}
      collapsed={expand}
      collapseStringsAfterLength={32}
      groupArraysAfterLength={20}
      name={false}
      sortKeys={false}
    />
  );
};

export default JsonTree;
