import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 55px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const CertificateCard = styled.div`
  width: 500px; /* Increased width */
  height: 450px; /* Increased height to accommodate the title */
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Stack title and image vertically */
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 10px 0;
  text-align: center;
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top: 1px solid ${({ theme }) => theme.text_secondary};
`;

const Certificate = ({ certificates }) => {
  return (
    <>
      <Heading>My Certificates</Heading> {}
      <Container>
        {certificates.map((certificate, index) => (
          <CertificateCard key={index}>
            <Title>{certificate.title}</Title>
            <CertificateImage src={certificate.image} alt={certificate.title} />
          </CertificateCard>
        ))}
      </Container>
    </>
  );
};

export default Certificate;