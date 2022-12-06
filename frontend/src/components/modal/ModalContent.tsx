import React from "react";
import styled from "styled-components";
import CloseButton from "../../utils/widgets/CloseButton";
import Modal from "./Modal";

export interface IModalContent {
  title: string;
  content: JSX.Element;
  modal: boolean;
  isModalOpen: (arg: boolean) => void;
}

const ModalContent: React.FC<IModalContent> = ({
  title,
  content,
  modal,
  isModalOpen,
}) => {
  return (
    <Modal show={modal}>
      <SModalContent>
        <STitleModal>
          <div className="modal-title">{title}</div>
          <div
            onClick={() => {
              isModalOpen(false);
            }}
          >
            <CloseButton />
          </div>
        </STitleModal>
        {content}
      </SModalContent>
    </Modal>
  );
};

export default ModalContent;

const SModalContent = styled.div`
  width: 381px;
  background-color: #fff;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 24px;

  & .modal-title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const STitleModal = styled.div`
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
