import { Link, useLocation } from 'react-router-dom';

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
