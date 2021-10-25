import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '../../utils/use-query';
import './completion-screen.scss';

function CompletionScreen() {
  const query = useQuery();
  const moves = query.get('moves');

  return (
    <div className="completion">
      <div className="completion-screen">
        <p>{`Congrats! You WIN in ${moves} moves`}</p>
        <Link to="/"> Go to Home</Link>
      </div>
    </div>
  );
}

export default CompletionScreen;
