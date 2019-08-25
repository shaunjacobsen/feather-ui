import React from 'react';

export const Editor = props => {
  return (
    <div className="editor">
      <div className="inputs">
        <input type="text" value="post title" className="large default"></input>
        <input type="text" value="start typing..." className="default"></input>
      </div>
      <div className="post-options">
        <div className="btn btn-primary">Save</div>
        <div className="btn btn-inverse">Discard</div>
      </div>
    </div>
  );
};
