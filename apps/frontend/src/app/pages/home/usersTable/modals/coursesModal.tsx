import { Text } from 'apps/frontend/src/app/components/styled';
import { User } from 'apps/frontend/src/app/models/user';
import { OpacityModal } from '../styles';
import {
  CloseButton,
  ContentModal,
  FooterModal,
  GridProgressBar,
  HeaderModal,
  Modal,
  ProgressBar,
  ProgressBarContainer,
} from './styles';

interface Props {
  activeModal: boolean;
  toggleTab: () => void;
  currentUser: User | undefined;
  isOpenCoursesModal: boolean;
  setIsOpenCoursesModal: (b: boolean) => void;
  setActiveModal: (b: boolean) => void;
}

export function CoursesModal({
  activeModal,
  toggleTab,
  setIsOpenCoursesModal,
  currentUser,
  setActiveModal,
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
        </HeaderModal>
        <ContentModal>
          {!currentUser?.courses.length && (
            <h2 style={{ textAlign: 'center' }}>
              Este usuario no tiene cursos todavía
            </h2>
          )}
          {currentUser?.courses.map((course: any, i: number) => (
            <div key={i}>
              <Text size="15px" weight="500" style={{ marginBottom: '0.3em' }}>
                {course.title}
              </Text>
              <GridProgressBar>
                <ProgressBarContainer>
                  <ProgressBar
                    style={{ width: `${course.percentCompleted}%` }}
                  />
                </ProgressBarContainer>
                <Text size="13px" weight="500">
                  {course.percentCompleted}%
                </Text>
              </GridProgressBar>
              <Text size="10px" color="#767676" style={{ marginTop: '0.2em' }}>
                Fecha de inscripción: {course.inscriptionDate}
              </Text>
            </div>
          ))}
        </ContentModal>
        <FooterModal>
          <CloseButton
            onClick={() => {
              setIsOpenCoursesModal(false);
              setActiveModal(true);
            }}
          >
            Cerrar
          </CloseButton>
        </FooterModal>
      </Modal>
    </OpacityModal>
  );
}
