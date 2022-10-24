import { isAuth } from '../../hooks/useIsAuth';

import { Header } from './header';
import { UsersTable } from './usersTable';
import { Container } from './styles';
import '../../styles/styles.css';
import { Sidebar } from './sidebar';
import { getUsers } from '../../hooks/useGetUsers';
import { useEffect, useRef, useState } from 'react';
import { User } from '../../models/user';
import { Text } from '../../components/styled';

export function Home() {
  isAuth();
  const { users, loading, error } = getUsers();
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const inputValue = useRef('');

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = (e: string) => {
    inputValue.current = e;
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(inputValue.current.toLowerCase()) ||
        user.lastName.toLowerCase().includes(inputValue.current.toLowerCase())
    );

    setFilteredUsers(result);
  };

  if (error)
    return (
      <Text size="40px" weight="600" paddingTop="15px" paddingLeft="15px">
        Error
      </Text>
    );

  return (
    <>
      <Header handleSearch={handleSearch} inputValue={inputValue.current} />
      <Container>
        <Sidebar />
        <UsersTable filteredUsers={filteredUsers} loadingUsers={loading} />
      </Container>
    </>
  );
}
