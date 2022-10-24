import { Button, Text } from 'apps/frontend/src/app/components/styled';
import { User } from 'apps/frontend/src/app/models/user';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { OpacityModal } from '../styles';
import {
  Avatar,
  CloseButton,
  ContentModal,
  FlexContainer,
  FooterModal,
  GridContainer,
  HeaderModal,
  Modal,
  RightButton,
} from './styles';

interface Props {
  activeModal: boolean;
  toggleTab: () => void;
  toggleEditModal: () => void;
  currentUser: User | undefined;
  isOpenInfoModal: boolean;
  setIsOpenInfoModal: (b: boolean) => void;
}

export function InfoModal({
  activeModal,
  toggleTab,
  toggleEditModal,
  currentUser,
  isOpenInfoModal,
  setIsOpenInfoModal,
}: Props) {
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
          <RightButton onClick={toggleEditModal} color="white">
            Editar estudiante
          </RightButton>
        </HeaderModal>
        <ContentModal>
          <Avatar src={currentUser?.avatar} />
          <GridContainer>
            <div style={{ paddingTop: '8px', paddingLeft: '5px' }}>
              <AiOutlineUser size={20} />
            </div>
            <div>
              <Text size="11px" weight="600">
                Nombre y apellidos
              </Text>
              <Text>{`${currentUser?.name} ${currentUser?.lastName}`}</Text>
            </div>
          </GridContainer>
          <GridContainer>
            <div></div>
            <div>
              <Text size="11px" weight="600">
                Nombre de usuario
              </Text>
              <Text>{currentUser?.username}</Text>
            </div>
          </GridContainer>
          <GridContainer>
            <div style={{ paddingTop: '8px', paddingLeft: '5px' }}>
              <HiOutlineEnvelope size={20} />
            </div>
            <div>
              <Text size="11px" weight="600">
                Email
              </Text>
              <Text>{currentUser?.email}</Text>
            </div>
          </GridContainer>
          <GridContainer>
            <div style={{ paddingTop: '8px', paddingLeft: '5px' }}>
              <BsPhone size={20} />
            </div>
            <div>
              <Text size="11px" weight="600">
                Móvil
              </Text>
              <Text>{currentUser?.phone}</Text>
            </div>
          </GridContainer>
          <GridContainer>
            <div style={{ paddingTop: '8px', paddingLeft: '5px' }}>
              <AiOutlineCalendar size={20} />
            </div>
            <div>
              <Text size="11px" weight="600">
                Fecha de inscripción
              </Text>
              <Text>{currentUser?.inscriptionDate}</Text>
            </div>
          </GridContainer>
        </ContentModal>
        <FooterModal>
          <CloseButton onClick={() => setIsOpenInfoModal(!isOpenInfoModal)}>
            Cerrar
          </CloseButton>
        </FooterModal>
      </Modal>
    </OpacityModal>
  );
}
