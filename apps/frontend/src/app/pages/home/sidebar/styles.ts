import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: block;
`;

interface ItemSidebarprops {
  active?: boolean;
}

const ItemSidebar = styled.div<ItemSidebarprops>`
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: ${(props) => (props.active ? '1em' : '2em')};
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: ${(props) =>
    props.active ? '1px 1px 6px 1px rgba(0, 0, 0, 0.2) ' : 'none'};
  height: fit-content;
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  padding-bottom: 1.2em;
`;

export { SidebarContainer, ItemSidebar, SubMenu };
