import React from "react";
import styled from "styled-components";
import { generateHashFromEmail } from "../../utils/functions/hashGenerator"

export interface IAvatar {
  email: string | undefined
}

const Avatar: React.FC<IAvatar> = ({email}) => {
  const hash = generateHashFromEmail(email)
  return (
    <SAvatar>
      <img src={`https://avatars.dicebear.com/api/male/${hash}.svg`} />
    </SAvatar>
  );
};

export default Avatar;

const SAvatar = styled.span`
  & img {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    background-color: grey;
  }
`;
