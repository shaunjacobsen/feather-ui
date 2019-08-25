import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

export const Nav = props => {
  return (
    <nav>
      <div className="brand">
        <FontAwesomeIcon icon={faFeatherAlt} size="sm" />&nbsp;
        feather
      </div>
    </nav>
  );
};
