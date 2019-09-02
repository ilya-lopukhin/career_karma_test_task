import React from 'react';
import { Flex, Text } from 'styled';

const Guidelines = () => (
  <Flex
    column
    width="500px"
    spacing={40}
    padding="20px 10px"
    background="#F8FAFC"
    borderRadius="4px"
    shadow="0 3px 6px 2px rgba(0, 0, 0, .1)"
  >
    <Text size="18px">
      Review Guidelines
    </Text>
    <Text color="#72808E">
      •	Only Applicants, Students, and Graduates are permitted to leave reviews on Course Report.
    </Text>
    <Text color="#72808E">
      •	Post clear, valuable, and honest information that will be useful and informative to future coding bootcampers. Think about what your bootcamp excelled at and what might have been better.
    </Text>
    <Text color="#72808E">
      •	Be nice to others; don't attack others.
    </Text>
    <Text color="#72808E">
      •	Use good grammar and check your spelling.
    </Text>
    <Text color="#72808E">
      •	Don't post reviews on behalf of other students or impersonate any person, or falsely state or otherwise misrepresent your affiliation with a person or entity.
    </Text>
    <Text color="#72808E">
      •	Don't spam or post fake reviews intended to boost or lower ratings.
    </Text>
    <Text color="#72808E">
      •	Don't post or link to content that is sexually explicit.
    </Text>
    <Text color="#72808E">
      •	Don't post or link to content that is abusive or hateful or threatens or harasses others.
    </Text>
    <Text color="#72808E">
      •	Please do not submit duplicate or multiple reviews. These will be deleted. Email moderators to revise a review or click the link in the email you receive when submitting a review.
    </Text>
    <Text color="#72808E">
      •	Please note that we reserve the right to review and remove commentary that violates our policies.
    </Text>
  </Flex>
)

export default Guidelines;
