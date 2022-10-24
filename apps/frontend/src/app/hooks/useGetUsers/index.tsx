import { useEffect, useState } from 'react';
import { User } from '../../models/user';

export function getUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('DB.json')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}
