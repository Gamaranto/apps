import { u32, GenericAccountId, Option, Enum, Vec } from '@polkadot/types';
import { BlockNumber, Balance, Hash } from '@polkadot/types/interfaces';
import { Registry, Codec } from '@polkadot/types/types';

import { ProposalStatus } from '../proposals';

export class Announcing extends u32 { }
export class Voting extends u32 { }
export class Revealing extends u32 { }

export type TransferableStake = {
    seat: Balance;
    backing: Balance;
};

export type Stake = {
    new: Balance;
    transferred: Balance;
};

export type Backer = {
    member: GenericAccountId;
    stake: Balance;
};

export type Seat = {
    member: GenericAccountId;
    stake: Balance;
    backers: Backer[];
};

export type SealedVote = {
    voter: GenericAccountId;
    commitment: Hash;
    stake: Stake;
    vote: Option<GenericAccountId>;
};

export type TallyResult = {
    proposal_id: u32;
    abstentions: u32;
    approvals: u32;
    rejections: u32;
    slashes: u32;
    status: ProposalStatus;
    finalized_at: BlockNumber;
};

// Treat a BTreeSet as a Vec since it is encoded in the same way.
export class BTreeSet<T extends Codec> extends Vec<T> { }

export class ElectionStage extends Enum {
    constructor(registry: Registry, value?: any, index?: number) {
        super(
            {
                Announcing,
                Voting,
                Revealing
            },
            value,
            index
        );
    }

    /** Create a new Announcing stage. */
    static Announcing(endsAt: BlockNumber | number): ElectionStage {
        return this.newElectionStage('Announcing', endsAt);
    }

    /** Create a new Voting stage. */
    static Voting(endsAt: BlockNumber | number): ElectionStage {
        return this.newElectionStage('Voting', endsAt);
    }

    /** Create a new Revealing stage. */
    static Revealing(endsAt: BlockNumber | number): ElectionStage {
        return this.newElectionStage('Revealing', endsAt);
    }

    static newElectionStage(stageName: string, endsAt: BlockNumber | number) {
        return new ElectionStage({ [stageName]: endsAt });
    }
}

export type AnyElectionStage = Announcing | Voting | Revealing;

const electionTypes = {
    BTreeSet,
    MemoText: 'Text',
    ElectionStage,
    ElectionStake: {
        new: 'Balance',
        transferred: 'Balance'
    },
    Backer: {
        member: 'GenericAccountId',
        stake: 'Balance'
    },
    Seat: {
        member: 'GenericAccountId',
        stake: 'Balance',
        backers: 'Vec<Backer>'
    },
    Seats: 'Vec<Seat>',
    SealedVote: {
        voter: 'GenericAccountId',
        commitment: 'Hash',
        stake: 'ElectionStake',
        vote: 'Option<GenericAccountId>'
    },
    TransferableStake: {
        seat: 'Balance',
        backing: 'Balance'
    },
    RuntimeUpgradeProposal: {
        id: 'u32',
        proposer: 'GenericAccountId',
        stake: 'Balance',
        name: 'Text',
        description: 'Text',
        wasm_hash: 'Hash',
        proposed_at: 'BlockNumber',
        status: 'ProposalStatus'
    },
    'TallyResult<BlockNumber>': {
        proposal_id: 'u32',
        abstentions: 'u32',
        approvals: 'u32',
        rejections: 'u32',
        slashes: 'u32',
        status: 'ProposalStatus',
        finalized_at: 'BlockNumber'
    }

};

export default electionTypes;
