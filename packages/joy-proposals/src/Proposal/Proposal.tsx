import React from "react";

import { Container } from "semantic-ui-react";
import Votes from "./Votes";
import Details from "./Details";
import Body from "./Body";
import VotingSection from "./VotingSection";

import "./Proposal.css";

export type Member = {
  name?: string;
  avatar?: string;
};

export type VoteValue = "Approve" | "Slash" | "Abstain" | "Reject";

export type Vote = {
  value: VoteValue;
  by: Member;
  createdAt: string;
};

export type DetailsProps = {
  // FIXME: Stage, substage and type all should be an enum
  stage?: string;
  substage?: string;
  expiresIn?: number;
  type?: string;
  createdBy?: Member;
  createdAt?: string;
};

export type ProposalProps = {
  title?: string;
  description?: string;
  params?: {
    tokensAmount?: number;
    destinationAccount?: string;
  };
  votes?: Vote[];
  totalVotes?: number;
  details?: DetailsProps;
  onVote?: (vote: VoteValue) => void;
  vote?: {
    hasVoted?: boolean;
    value?: VoteValue;
  };
  finalized?: "approved" | "rejected" | "slashed" | "withdrawn";
};

export default function Proposal({
  title,
  description,
  params,
  details,
  votes = [],
  totalVotes = 0,
  onVote,
  vote
}: ProposalProps) {
  const { hasVoted = false, value = undefined } = vote || {};
  return (
    <Container className="Proposal">
      <Details {...details} />
      <Body title={title} description={description} params={params} />
      <VotingSection onVote={onVote} hasVoted={hasVoted} value={value} />
      <Votes votes={votes} total={totalVotes} />
    </Container>
  );
}
