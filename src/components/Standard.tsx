import styled from 'styled-components';

// 테마에 따른 스타일 설정
const Stand_span = styled.span`
  padding: 50px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderColor}; /* 테마에 따른 테두리(border) 색상 설정 */
`;

interface StandardProps {
  content: string;
}

export default function Standard({ content }: StandardProps) {
  return (
    <Stand_span>
      <h1>{content}</h1>
    </Stand_span>
  );
}
