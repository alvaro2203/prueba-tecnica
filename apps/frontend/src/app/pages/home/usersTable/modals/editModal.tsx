import { Text } from 'apps/frontend/src/app/components/styled';
import { User } from 'apps/frontend/src/app/models/user';
import { useState } from 'react';
import { Input, Label } from '../../../login/styles';
import { OpacityModal } from '../styles';
import {
  CloseButton,
  ContentModal,
  FlexContainer,
  FooterModal,
  FormContainer,
  HeaderModal,
  Modal,
  RightButton,
} from './styles';

interface Props {
  activeModal: boolean;
  toggleTab: () => void;
  toggleEditModal: () => void;
  currentUser: User | undefined;
  isOpenEditModal: boolean;
  setIsOpenEditModal: (b: boolean) => void;
  filteredUsers: User[];
}

export const EditModal = ({
  activeModal,
  toggleTab,
  toggleEditModal,
  isOpenEditModal,
  setIsOpenEditModal,
  currentUser,
  filteredUsers,
}: Props) => {
  const [name, setName] = useState<string>(currentUser ? currentUser.name : '');
  const [surname, setSurname] = useState<string>(
    currentUser ? currentUser.lastName : ''
  );
  const [username, setUsername] = useState<string>(
    currentUser ? currentUser.username : ''
  );
  const [email, setEmail] = useState<string>(
    currentUser ? currentUser.email : ''
  );
  const [phone, setPhone] = useState<string>(
    currentUser ? currentUser.phone : ''
  );

  const handleSave = () => {
    const userIndex = filteredUsers.findIndex(
      (user) => user._id === currentUser?._id
    );

    filteredUsers[userIndex].name = name;
    filteredUsers[userIndex].lastName = surname;
    filteredUsers[userIndex].username = username;
    filteredUsers[userIndex].email = email;
    filteredUsers[userIndex].phone = phone;

    toggleEditModal();
  };

  return (
    <OpacityModal>
      <Modal>
        <HeaderModal>
          <Text
            size="13px"
            weight={activeModal ? '600' : '400'}
            paddingLeft="5px"
            paddingRight="5px"
            active={activeModal}
            borderBottom={activeModal ? '4px' : '8px'}
            cursor="pointer"
            onClick={toggleTab}
          >
            Perfil
          </Text>
          <Text
            size="13px"
            weight={activeModal ? '400' : '600'}
            paddingLeft="5px"
            paddingRight="5px"
            active={!activeModal}
            borderBottom={activeModal ? '8px' : '4px'}
            cursor="pointer"
            onClick={toggleTab}
          >
            Cursos
          </Text>
          <RightButton
            background="white"
            color="black"
            onClick={toggleEditModal}
            border="1px solid #262d34"
            marginRight="7px"
            isEdit
          >
            Cancelar edición
          </RightButton>
          <RightButton background="#262d34" isEdit onClick={handleSave}>
            Guardar
          </RightButton>
        </HeaderModal>
        <ContentModal padding="25px">
          <FlexContainer>
            <FormContainer>
              <Label size="11px" weight="400">
                Nombre
              </Label>
              <Input
                style={{ marginTop: '0.5em' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormContainer>

            <FormContainer>
              <Label size="11px" weight="400">
                Apellidos
              </Label>
              <Input
                style={{ marginTop: '0.5em' }}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </FormContainer>
          </FlexContainer>
          <Label size="11px" weight="400">
            Nombre de usuario
          </Label>
          <Input
            style={{ marginTop: '0.5em' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label size="11px" weight="400">
            Email
          </Label>
          <Input
            style={{ marginTop: '0.5em' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label size="11px" weight="400">
            Móvil
          </Label>
          <Input
            style={{ marginTop: '0.5em', width: '50%' }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </ContentModal>
        <FooterModal>
          <CloseButton onClick={() => setIsOpenEditModal(!isOpenEditModal)}>
            Cerrar
          </CloseButton>
        </FooterModal>
      </Modal>
    </OpacityModal>
  );
};
